import { getBooks } from "./lib/books";
import BookCard from "./components/BookCard";

export default async function HomePage() {
  const books = await getBooks();

  return (
    <main className="store">
      <header className="store-header">
        <p className="store-eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
        <h1>Abe Kebe Book Store</h1>
        <p className="store-subtitle">
          Discover books that inspire you to think, learn, and grow.
        </p>
      </header>

      <section className="books-section">
        <div className="section-heading">
          <h2>Explore our collection</h2>
          <span>{books.length} books</span>
        </div>

        <div className="books-grid">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </main>
  );
}