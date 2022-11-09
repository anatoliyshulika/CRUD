const bookId = 21;
const newBook = {
  title: "About my first PATCH",
  author: "Shulika Anatolii",
  genres: ["http"],
  rating: 8,
};

function updateBook(book, id) {
  const options = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  };

  fetch(`http://localhost:3000/books/${id}`, options)
    .then((response) => response.json())
    .then(console.log);
}

// updateBook(newBook, bookId);
