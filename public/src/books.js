function getId(item, id){
  const found = item.find((item) => item.id === id);
  return found;
}

function findAuthorById(authors, id) {
  return getId(authors, id);
}

function findBookById(books, id) {
  return getId(books, id);
}

function partitionBooksByBorrowedStatus(books) {
  const help = (books, returnedBool) => books.filter((book) => returnedBool === book.borrows[0].returned)
  const out = help(books, false)
  const returned = help(books, true)
  const final = [[...out], [...returned]]
  console.log(final)
  return final;
}

function getBorrowersForBook(book, accounts) {
  const borrowers = book.borrows.map((x) => {
    const matchId = getId(accounts, x.id);
    return {...x, ...matchId};
  }).slice(0, 10);
  return borrowers;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
