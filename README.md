1. Root Query:

{
	authors{
    name,
    age,
    books {
      name
    }
  }
}


{
  books {
    name
    genre
  }
}

2. Mutation

mutation {
  addAuthor(name: "Tery Pratchett", age: 66) {
    name
    age
  }
}

mutation {
  addAuthor(name: "Albert Einstein", age: 66) {
    name
    age
  }
}


mutation {
  addBook(name: "The Book 3", genre: "Fantasy", authorId: "5c39a0e8f0912c6f18a58701"){
    name,
    genre
  }
}

mutation {
  addBook(name: "The Long Earth", genre: "Scie Fi", authorId: "5c39a0e8f0912c6f18a58701"){
    name,
    genre
  },
}

mutation {
  addBook(name: "The Long Earth", genre: "Scie Fi", authorId: "5c39a0e8f0912c6f18a58701"){
    name,
    genre
  },
}



III. Install Apollo Client

 npm install apollo-boost react-apollo graphql --save

 IV. In Server app do
  npm install cors --save