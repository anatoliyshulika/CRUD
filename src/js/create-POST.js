const newBook = {
  title: "First POST",
  author: "Shulika Anatolii",
  genres: ["приключения"],
  rating: 100,
};

const newBook2 = {
  title: "Second POST",
  author: "Shulika Anatolii",
  genres: ["приключения"],
  rating: 90,
};

function addBook(book) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  };

  return fetch("http://localhost:3000/books", options).then((response) =>
    response.json()
  );
}

// addBook(newBook2).catch((error) => console.log(error));
