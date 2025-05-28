const specificDate = new Date(2025, 4, 28);  
const year = specificDate.getFullYear();
const month = specificDate.getMonth() + 1;
const day = specificDate.getDate();

const formattedDate = year + '年' + month + '月' + day + '日';
console.log(formattedDate);
