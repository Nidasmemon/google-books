import React, { Component } from "react";
 
import api from "../utils/api";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
 

class Saved extends Component {
    state = {
        apiResults: []
    }

    componentDidMount() {
        this.getSavedBooks();
    }

    getSavedBooks = (event) => {
        api.getSavedBooks().then(result => {
            console.log(result.data);
            this.setState({
                apiResults: result.data
            })
        })
    }

    handleDelete = (id) => {
        api.deleteBook(id).then(result => {
            this.getSavedBooks();
        })
    }

    render() {
        return (
            <Container>

                <div className="row">
                    <div className="col-sm-12">
                        <Jumbotron />
                    </div>
                </div>

                <div className="results">
                    <div className="row">
                        <div className="col-sm-12">
                            <h4>Saved Books</h4>
                        </div>
                    </div>

                    {this.state.apiResults.length > 0 ? this.state.apiResults.map((result, index) => {
                        return (
                            <div className="results" key={index}>
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h5>{result.title}</h5>
                                        <h6>Written by: <span id="author">{result.authors.join(", ")}</span></h6>
                                    </div>
                                    <div className="col-sm-4">
                                        <button type="submit" onClick={() => {
                                        
                                           this.handleDelete(result._id)
                                            
                                            }}  className="btn btn-secondary delete">Delete</button>
                                        <a href={result.link} className="btn btn-secondary view" >View</a>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-3"><img src={result.image} alt="book"/></div>
                                    <div className="col-sm-9">{result.description}</div>
                                </div>
                            </div>
                        )
                    }) : "No Results Found"}

                </div>

            </Container >
        )
    }
}

export default Saved;