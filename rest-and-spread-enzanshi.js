// restとSpread演算子について


// rest演算子 ＝ 引数に入ってきたものを配列に変換する役割


// こちらもコードのリファクタリング



// ーーー改善前ーーー

function addNumbers(a, b, c, d, e) {
  const numbers = [a, b, c, d, e]
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers(1, 2, 3, 4, 5);
// ここの引数を可変にしたい



// ーーー渡す引数を可変にしたい場合ーーー

// こんなときに使えるのがrest演算子

// ...がそれ

// 引数に入ってきたものを配列に変換する役割

function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers(1, 2, 3, 4, 5);



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



// Spread演算子は？

// まとまっているものを分解してくれる演算子

const defaultColors = ['赤', '緑'];
const userFavoriteColors = ['オレンジ', '黃'];
const fallColors = ['茶', '紅葉'];

// ES5の場合
defaultColors.concat(userFavoriteColors);

// ES6の場合
// 前後にいれるだけで作りたい配列の順番を簡単に変えられる
[ ...fallColors, ...defaultColors, ...userFavoriteColors ];

// 一つだけ配列に追加したい場合も・・・
[ '青', ...fallColors, ...defaultColors, ...userFavoriteColors ];



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



// rest演算子とSpread演算子の例


// ショッピングリストの中に牛乳が入っていなかったら牛乳を追加したい


// 上の...itemsはrest演算子で引数を可変状態に。
function validateShoppingList(...items) {
  if (items.indexOf('牛乳') < 0) {
    return [ '牛乳', ...items];
  }
  // 下の...itemsはSpread演算子で配列を分解して返す。

  return items;
}

validateShoppingList('オレンジ', 'パン');



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



// 実務の例


// 自分がJSの演算がつまったライブラリを公開するとき


const MathLibrary = {
  calculateProduct(a, b) {
    return a * b;
  }
};

// calculateProductをわかりやすくmultiplyに途中で変えたい

const MathLibrary = {
  calculateProduct(...rest) {
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  }
};

MathLibrary.calculateProduct(2, 3);
MathLibrary.multiply(2, 3);





