function deleteBook(bookId) {
  const options = {
    method: "DELETE",
  };

  return fetch(`http://localhost:3000/books/${bookId}`, options).then(
    (response) => response.json()
  );
}

// deleteBook(20);
