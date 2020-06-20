// コーディングルール


// なぜコーディング規約が必要か
// ① チーム全員が読みやすいコードにするため
// ② コードレビューの指針とするため
// ③ 開発と運用で人員が変わってもコードの一貫性を保つため


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// ① 変数宣言

// 変数宣言にはletを使う
let name = "charahack"
name = "torahack"

// 定数ならばconstを使う
const birthday = "1996-02-25"

// varは非推奨
var name = "torahack"


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// ② 命名規則

// 基本はキャメルケース
let variableNamesLikeThis = "hoge"
const functionNamesLikesThis = () => {}

// クラス名はアッパーキャメルケース
class ClassNamesLikeThis {}

// 定数はスネークケース（パスワードとか）
const SOME_API_KEY = "asdjfowijdfas"


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// ③ 行末のセミコロン

// あってもなくてもエラーにはならない

const withSemiColon = "hoge";
const withoutSemiColon = "fuga"


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// ④ 関数宣言の方法

// アロー関数（ES6が使える環境なら推奨）
const getUserId = () => {
  // 処理
}

// function宣言
function getUserId() {
  // 処理
}

// 関数式
const getUserId = function() {
  // 処理
}

// どれを使うのかを決めるのが大事


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// ④ インデント

// スペース4つが推奨
if (isApplied) {
    const spaceIndent = 4
}

// スペース2つの環境もある
if (isApplied) {
  const spaceIndent = 2
}

// タブインデントは非推奨
if (!isApplied) {
    const typeOfIndent = "tab"
}


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー