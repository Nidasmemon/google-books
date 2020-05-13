import axios from "axios";



export default {
    
    getGoogleApi: function(title) {
        return axios.get("/api/googlebooks/" + title)
    },

    saveBook: function(saveBook) {
        return axios.post("/api/books", saveBook)
    },

    getSavedBooks: function() {
        return axios.get("/api/books")
    },

    deleteBook: function(id) {
        return axios.delete("/api/books/" + id)
    }
}