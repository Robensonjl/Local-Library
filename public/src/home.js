function sortCut(array, cut = 5) {
  const newArr = [...array];
  return newArr.sort(({count: a}, {count: b}) => b - a).slice(0, cut);
}

function totalItem(item){
  const total = item.length;
  return total;
}

function getTotalBooksCount(books) {
 const totalBooks = totalItem(books)
 return totalBooks;
}

function getTotalAccountsCount(accounts) {
  const totalAccnts = totalItem(accounts)
  return totalAccnts;
}

function getBooksBorrowedCount(books) {
  const out = books.filter((book) => !book.borrows[0].returned);
  const numeral = totalItem(out);
  return numeral;
}

function getMostCommonGenres(books) {
  const recount = books.reduce((genres, book) => {
    const match = genres.find((genre) => genre.name === book.genre);
    !match ? genres.push({name: book.genre, count: 1}) : match.count++;
    return genres;
  }, []);
  return sortCut(recount);
}

function getMostPopularBooks(books) {
    //map through each book in books
    const newBooks = books.map(({ title, borrows }) => ({
      name: title, //name is the title of the book we deconstructed
      count: totalItem(borrows),
    }));
  return sortCut(newBooks);
}

function getMostPopularAuthors(books, authors) {
  const popular = authors.map(({name: {first, last}, id}) => ({
    name: `${first} ${last}`,
    count: books.reduce((total, { authorId, borrows }) => {
    authorId === id ? total += totalItem(borrows) : 0;
    return total;
  }, 0)}));
  return sortCut(popular);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
