// const a = [1, 2, 3, 4, 5];
// const b = a.filter((item) => {
//   return item != 3;
// });
// console.log(b);

// const a = [4, 3, 4, 2, 5, 6];
// a.forEach((v, i, a) => {
//   console.log(v, i, a);
// });
// there is a difference between for and foreach that we cannt used break and return in the for each but in the for loop we can used
// const b = [1, 3, 5, 6, 7, 8];
// for (let i = 0; i < b.length; i++) {
//   if (b[i] == 5) {
//     break;
//   }
//   console.log(b[i]);
// }

//map is the most important iteration methon expecially used in React
// it will returnd a new  transformed array
// we also have an adventage of using map to method channing
// let arr = [1, 2, 3, 4, 5, 6, 7];

// let transformedvalue = arr.map((v) => v * 2);
// console.log(transformedvalue);

// arr.map((v) => v * 2).forEach((v) => console.log(v));
// filter also retured a modefied array
// let arr = [1, 2, 3, 3, 5, 6, 6, 7];
// let filters = arr.filter((val) => val % 2 === 0);
// let filters = arr.filter((item, index) => arr.indexOf(item) == index);
// console.log(filters);

// filter is used to filter out a paricular arry which is meeting a certain conditions while find is used to find out the first elements of the array
