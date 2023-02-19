// let data = {
//     name: "Ali",
//     age: 22
// }

// let dataObj = JSON.stringify(data)
// let returnObj = JSON.parse(dataObj)

// console.log(data);
// console.log(dataObj);
// console.log(dataObj.name);
// console.log(returnObj.name);

const books = {
  book: [
    {
      bookID: 1,
      bookName: "JS",
      isAvilable: true,
      bookBorrower: "Saad",
      price: 15,
    },
    {
      bookID: 2,
      bookName: "Java",
      isAvilable: false,
      bookBorrower: "Fares",
      price: 15,
    },
    {
      bookID: 3,
      bookName: "Python",
      isAvilable: false,
      bookBorrower: "Ahmed",
      price: 15,
    },
  ],
};
books.book.forEach((item) => {
  console.log(
    ` The book ${item.bookName} is borrowed from ${item.bookBorrower}`
  );
});
