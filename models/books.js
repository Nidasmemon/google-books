var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var booksSchema = new Schema({
    title: {type: String},
    authors: {type: Array},
    description: {type: String},
    image: {type: String},
    link: {type: String}
})

var Book = mongoose.model("Book", booksSchema);
module.exports = Book;