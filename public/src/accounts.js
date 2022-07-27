function findAccountById(accounts, id) {
const foundAccnt = accounts.find((accounts) => accounts.id == id);
return foundAccnt;
}

//sort the accounts by the last name associated
function sortAccountsByLastName(accounts) {
  const order = [...accounts];
  order.sort((a, b) => a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1);
  return order;
}

function getTotalNumberOfBorrows(account, books) {
  const aID = account.id;
  const borrowedBooks = books.reduce((total, {borrows}) => {
    borrows.some((record) => record.id === aID) ? total++ : 0;
    return total;
  }, 0);
  return borrowedBooks;
}

function getBooksPossessedByAccount(account, books, authors) {
  //filter through the books array for books that have not been returned by this account
  const filtered = books.filter((book) => book.borrows[0].id === account.id && !book.borrows[0].returned)
  //map the author object to all of the filtered books
  const remap = filtered.map((book) => {
    book["author"] = authors.find((author) => author.id === book.authorId);
    return book;
  });
  return remap;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
