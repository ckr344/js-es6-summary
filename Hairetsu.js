// 配列メソッド 3選

// トラハックさん

// map, filter, findIndex

// 【ES6の配列メソッド】
// 便利なメソッドがたくさん増えた
// → シンプルに書ける、テクニック不要
// 種類が多くて使い所がわからない
// 使わなくても別の構文で代用できる
// 実行速度が早いわけではない


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// ①

map()  // 新しい配列を作る

// 配列をイテレートする
// 要素1つずつに処理を行う
// 新しい配列を生成する

const array = [1, 2, 4, 8];
const resultArray = array.map(x => x * 2)
console.log(resultArray)
// Array [2, 4, 8, 16]


// オブジェクトに対してmapを使う場合
const obj = {
  "hoge": {text: "fuga"},
  "foo":  {text: "ber"},
  "fix":  {text: "buzz"}
};
// Object.keys()でkeyの配列を作る
const objectArray = Object.keys(obj).map(key => {
  const value = obj[key]
  value['id'] = key
  return value
});

console.log(objectArray)


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// ②
filter()  // 条件に合う要素を抽出

// 配列をイテレートする
// 条件がtrueの要素のみ返す
// 配列を作る

const objectArray = [
  { id: "hoge", text: "fuga" },
  { id: "foo", text: "bar" },
  { id: "fiz", text: "buzz" }
];

const result = objectArray.filter(object => {
  return object.id === "hoge"
})
// 条件式を書いている

console.log(result[])
// Array [{ id: "hoge", text: "fuga" }]

console.log(result[0].text)
// "fuga"


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// ③

findIndex()  // 要素の何番目かを知る

// 配列をイテレートする
// 条件がtrueの要素が「何番目なのか」を返す

const objectArray = [
  { id: "hoge", text: "fuga" },
  { id: "foo", text: "bar" },
  { id: "fiz", text: "buzz" }
];

const index = objectArray.findIndex(object => {
  return object.id === 'hoge'
})
// 条件式を書いている

console.log(index, objectArray[index])
// 0, { id: "hoge", text: "fuga" }

console.log(index, objectArray[index].text)
// 0, "fuga"


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// 番外編

test()  // マッチする文字列かを判定する

// 正規表現を使う
// マッチする → true を返す
// マッチしない → false を返す

const torahack = "torahack"
const charahack = "charahack"
const regex = RegExp("tora*")

console.log(regex.test(torahack))  // true
console.log(regex.test(charahack))  // false

console.log(/chara*/.test(charahack)) // true
// 正規表現を直接記述


// 構文
{/* <正規表現>.test(<テスト対象>) */}


// （例）
const isTora = regex.test(torahack)

if (isTora) {
  console.log("私はトラハックです")
} else {
  console.log("私はトラハックではありません")
}