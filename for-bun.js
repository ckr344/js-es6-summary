// 最速のfor文  byトラハックさん

// 実行速度の違い

// 検証内容

// ①イテレート内で1000万個の数値を足し合わせる
// ②上記を5回繰り返して、各構文の最速地を計測
// ③検証ブラウザはChrome、Safari、Firefox

//   ①Chrome 81.0
//   ②Safari 13.1
//   ③Firefox 74.0


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// 共通箇所

const arr = new Array(10000000).fill(0).map((v, i) => i);

let sum = 0;

const len = arr.length | 0;

function addSum(v) {
  sum + v;
}

// ①1000万個の連番配列を生成
// ②合計値を入れるsum変数を宣言
// ③配列の長さをlen変数に宣言
// ④加算関数を定義


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// 基本のforたち

// #1 for
for (let j = 0; j < 5; j++) {
  sum = 0;
  console.time('for');
  for (let i = 0; i < len; i++) {
    sum += arr[i];
  }
  console.timeEnd('for');
  console.log(sum);
}


// #2 for of
for (let i = 0; i < 5; i++) {
  sum = 0;
  console.time('for of');
  for (const v of arr) {
    sum += v;
  }
  console.timeEnd('for of');
  console.log(sum);
}


// #3-1 forEach(arrow)
for (let i = 0; i < 5; i++) {
  sum = 0;
  console.time('forEach(arrow)');
  arr.forEach(v => {
    sum += v;
  });
  console.timeEnd('forEach(arrow)');
  console.log(sum);
}


// #3-2 forEach(pre-defined function)
for (let i = 0; i < 5; i++) {
  sum = 0;
  console.time('forEach(function)');
  arr.forEach(addSum);
  console.timeEnd('forEach(function)');
  console.log(sum);
}

