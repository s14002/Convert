var dif = 1988;
function convertCalendar(year) {
}

function convertWarekiToSeireki(year) {
  return year + dif;
}

function convertSeirekiToWareki(year) {
  return year - dif;
}
console.log("西暦" + convertWarekiToSeireki(27)+"年");
console.log("平成" + convertSeirekiToWareki(2015) + "年");

// console.log(convertWarekiToSeireki(27); → 西暦2015年
// console.log(convertSeirekiToWareki(2015); →　平成27年
