import React, { useState } from 'react';
import Book from './Book';
import SearchFilter from './SearchFilter';


const initialBooks = [
  { title: 'Book 1', author: 'John', dueDate: getRandomDueDate(), status: 'Checked Out' },
  { title: 'Book 2', author: 'Jane', dueDate: getRandomDueDate(), status: 'Checked Out' },
  { title: 'Book 3', author: 'Mike', dueDate: getRandomDueDate(), status: 'Checked Out' },
  { title: 'Book 4', author: 'Lisa', dueDate: getRandomDueDate(), status: 'Checked Out' },
  { title: 'Book 5', author: 'John', dueDate: getRandomDueDate(), status: 'Checked Out' },
  { title: 'Book 6', author: 'Jane', dueDate: getRandomDueDate(), status: 'Checked Out' },
  { title: 'Book 7', author: 'Mike', dueDate: null, status: 'Available' },
  { title: 'Book 8', author: 'Lisa', dueDate: null, status: 'Available' },
  { title: 'Book 9', author: 'John', dueDate: null, status: 'Available' },
  { title: 'Book 10', author: 'Jane', dueDate: null, status: 'Available' }
];


function getRandomDueDate() {
  const today = new Date();
  const dueDate = new Date(today);
  dueDate.setDate(today.getDate() + Math.floor(Math.random() * 30));
  return dueDate.toISOString().split('T')[0]; 
}

const Books = () => {
  const [books, setBooks] = useState(initialBooks);
  const [searchQuery, setSearchQuery] = useState('');

  const handleToggleStatus = (index) => {
    const newBooks = [...books];
    newBooks[index].status = newBooks[index].status === 'Checked Out' ? 'Available' : 'Checked Out';
    newBooks[index].dueDate = newBooks[index].status === 'Checked Out' ? getRandomDueDate() : null;
    setBooks(newBooks);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchFilter searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <div>
        <h3>No., Title, Author, Due Date, Status</h3>
        {filteredBooks.map((book, index) => (
          <Book 
            key={index}
            book={book}
            onToggleStatus={() => handleToggleStatus(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Books;
