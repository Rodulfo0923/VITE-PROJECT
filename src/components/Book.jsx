import React from 'react';

const Book = ({ book, onToggleStatus }) => (
  <div>
    <span>{book.title} - {book.author}</span>
    {book.status === 'Checked Out' && <span> - Due Date: {book.dueDate}</span>}
    <span> - Status: {book.status}</span>
    <button onClick={onToggleStatus}>Toggle Status</button>
  </div>
);

export default Book;
