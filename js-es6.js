// ES6 Guide


// ES6 vs ES2015

// ES = ECMAScript
  // ECMAScript = 標準規格
  // ECMAScriptの実装がJavaScript
  // ES6 = ES2015 同じ意味
  // ES6のコード → Babelで変換 → ES5のコード = 殆どのブラウザで使えるようになる


// 配列の便利メソッド
  // forEach
  // map
  // filter
  // find
  // every
  // some
  // reduce
  // だいたい同じ動きをする


// forEachメソッド
  // 以前はforループだった
// （例1）
var colors = [ 'red', 'blue', 'green' ];
  // 元々の書き方
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
  // forEachの書き方
  // functionは無名関数。functionの中身をあわせてコールバック関数と呼ぶ。
  // forEachを使うことで1つ1つに対して処理を行ってくれる
colors.forEach(function(color){
  console.log(color);
});

// （例2）
// 数字の配列を用意する
var numbers = [1, 2, 3, 4, 5];
// 合計を保持する変数を用意する
var sum = 0;
// 配列の一つひとつの数字を合計に足す
numbers.forEach(function(number){
  sum += number;
} );
// 合計を表示する
sum;

// （例2の別解）
// 数字の配列を用意する
var numbers = [1, 2, 3, 4, 5];
// 合計を保持する変数を用意する
var sum = 0
function adder(number) {
	sum += number;
}
// 配列の一つひとつの数字を合計に足す
numbers.forEach(adder);
// 合計を表示する
sum;
