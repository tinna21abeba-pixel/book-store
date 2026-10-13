import { books } from "../data/books";

export async function getBooks() {
    return books;
}
 export async function getBookById(id) {
    return books.find((book) => book.id === id);
 }
