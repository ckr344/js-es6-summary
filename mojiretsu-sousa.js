// 文字列操作 5選



// ①
String.prototype.split()

// 文字列を指定した区切り文字列で分割する

const url = "https://torohack.web.app?uid=abcde12345"
const array = url.split('?uid=')

// 戻り地は配列（array）
// 「?uid=」が区切り文字列

console.log(array)
// 実行結果  ['https://torohack.web.app', 'abcde12345']

const array = url.split('?uid=')[1]
// 上記のようにすると「abcde12345」だけが取れる


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// ②
String.prototype.slice()

// 指定した数値に応じて、文字列の一部分を取り出す
// ※0文字目からカウント

const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(4, 19));
// expected output: "quick brown fox"
// 先頭の5文字目〜20文字目

console.log(str.slice(-4));
// expected output: "dog."
// 末尾の4文字目以降


// （例）
// 日付を0paddingしたいとき

const datetime = new Date()
console.log("Before:", datetime.toStoring())

const formattedDate = datetime.getFullYear() + '-'
                    + ('00' + (datetime.getMonth()+1)).slice(-2) + '-' // 006 → 06
                    + ('00' + datetime.getDate()).slice(-2) // 009 → 09

console.log("After:", formattedDate)

// Before: Tue Jun 09 2020 08:45:13 GMT+0900（日本標準時）
// After: 2020-06-09


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// ③
String.length

// 文字列の長さ（＝文字数）を表す

const str = 'torahack';

console.log(str.length);
// expected output: 8


// （例）
// 文字数に制限をかける

const description = document.getElementById('description')
const currentLength = document.getElementById('current-length')

description.addEventListener('change', (event) => {
  const text = event.target.value
  const length = text.length
  currentLength.innerText = length
})