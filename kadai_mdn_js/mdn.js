const date = new Date;
const [month, day, year] = [
  date.getMonth() + 1, // 0始まりのため +1 する
  date.getDate(),
  date.getFullYear(),
];


console.log(year + "年" + month + "月" + day + "日");