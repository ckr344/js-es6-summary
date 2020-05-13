// reduceメソッド


// この中で一番柔軟
// いままでのメソッド全部reduceで書こうと思えば書ける


// reduceは初期値があって、それが次に引き継がれていくことが特徴


// 配列の中にある値を、なにか1つに集約していく動きをする


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// 配列の数値の合計を求める


var numbers = [ 10, 20, 30 ]
var sum = 0;

numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);


// 第2引数の0が初期値となる。数値はなんでもOK。


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// 初期値は数字でなくてもOK


// [ 'red', 'yellow', 'blue' ]の配列を作成したいとき


// 基本的にはmapを使うがreduceでも再現ができる


var primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
]

primaryColors.reduce(function(previous, primaryColors) {
  previous.push(primaryColors.color)
  return previous;
}, []);


// 初期値に「[]」にて空の配列を持たせる


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// reduceの具体例


// 左括弧の量と、右括弧の量が同じかどうか判定するメソッドを使うとき
// 均衡が取れているか取れていないかを判定する


'(((())))'

'()'

'((())'

')(((((('


// 左括弧が出てきたら＋1、右括弧が出てきたら−1
// 合計値が0になったら均衡が取れる


// splitで文字列を分解

// !をつけてtrueとfalseに判定させる(つけなかったら数字が出る)

// if (previous < 0) { return previous; }は右括弧から始まったときにその時点でfalseで返す

function balancedParens(string) {
  return !string.split('').reduce(function(previous, char) {
    if (previous < 0) { return previous; }
    if (char === '(') { return previous + 1; }
    if (char === ')') { return previous - 1; }
  }, 0);
}

balancedParens('()');

// balancedParensのカッコを判定させる




