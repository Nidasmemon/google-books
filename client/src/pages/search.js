import React, { Component } from "react";
import api from "../utils/api";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import Form from "../components/Form";



class Search extends Component {
    state = {
        apiResults: [],
        search: ""
    }



    handleOnChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value  //keyword:value
        })

    }

    handleSubmit = (event) => {
        console.log("search", this.state.search)
        api.getGoogleApi(this.state.search).then(results => {
            
            this.setState({
                apiResults: results.data.items
            })
        })
    }
    
    handleSave = (result) => {
        const saveBook = {
            title: result.volumeInfo.title,
            authors: result.volumeInfo.authors,
            description: result.volumeInfo.description,
            image: result.volumeInfo.imageLinks.thumbnail,
            link: result.volumeInfo.previewLink
        }
        api.saveBook(saveBook).then(results => {
            console.log(results);
        })
    }

    render() {
        return (
            <Container>

                <div className="row">
                    <div className="col-xl-12">
                        <Jumbotron />
                    </div>
                </div>

                <div className="row row1">
                    <div className="col-xl-12">
                        <Form>
                            <div className="form-group">
                                <h4 className="title">Book Search</h4>
                                <label>Book</label>
                                <input type="text" onChange={this.handleOnChange} name="search" value={this.state.search} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <button type="submit" onClick={this.handleSubmit} className="btn btn-secondary search">Search</button>
                        </Form>
                    </div>
                </div>

                <div className="results">
                    <div className="row">
                        <div className="col-sm-12">
                            <h4>Results</h4>
                        </div>
                    </div>

                    {this.state.apiResults.length > 0 ? this.state.apiResults.map((result, index) => {
                        return (
                            <div className="results" key={index}>
                                <div className="row">
                                    <div className="col-sm-8">

                                        <h5>{result.volumeInfo.title}</h5>
                                        <h6>Written by: <span id="author">{result.volumeInfo.authors.join(", ")}</span></h6>
                                    </div>
                                    <div className="col-sm-4">
                                        <button type="submit" onClick={() => {
                                            this.handleSave(result)
                                        }} className="btn btn-secondary save">Save</button>

                                        <a href={result.volumeInfo.previewLink} className="btn btn-secondary view">View</a>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-3"><img src={result.volumeInfo.imageLinks != undefined ? result.volumeInfo.imageLinks.thumbnail : "/noimage.png"} style={{ width: "100%" }} /></div>
                                    <div className="col-sm-9"><span id="description">{result.volumeInfo.description}</span></div>
                                </div>

                            </div>
                        )
                    }) : "No Results Found"}

                </div>

            </Container >
        )
    }
}

export default Search;