export default function BookCard({ book }) {
  return (
    <article className="book-card">
      <div className="book-cover">
        <span className="book-cover-icon">📚</span>
        <span className="book-category">{book.category}</span>
      </div>

      <div className="book-card-content">
        <h2>{book.title}</h2>
        <p className="book-author">by {book.author}</p>

        <p className="book-description">
          {book.description}
        </p>

        <div className="book-card-footer">
          <span className="book-price">
            {book.price.toLocaleString()} ETB
          </span>

          <span className="book-stock">
            {book.stock > 0
              ? `${book.stock} available`
              : "Out of stock"}
          </span>
        </div>
      </div>
    </article>
  );
}