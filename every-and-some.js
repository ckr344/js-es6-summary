// everyメソッドとsomeメソッド


// 条件をつけてfalseかtrueを返す


// everyメソッド＝全てに対してのアンドの条件　(&&)
// someメソッド＝全てに対してのオアの条件　(||)


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
]


// everyメソッド＝全てに対してのアンドの条件
// 全ての要素が条件をtrueしていたときにtrueになる

computers.every(function(computer) {
  return computer.ram >= 16;
});


// someメソッド＝全てに対してのオアの条件
// 要素のどれかが条件をtrueしていたときにtrueになる

computers.some(function(computer) {
  return computer.ram >= 16;
});



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



var names = [
  'けん',
  'はなこ',
  'そういちろう'
];

names.every(function(name) {
  return name.length >= 3;
});

names.some(function(name) {
  return name.length >= 3;
});



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



// ログインフォーム
// 名前やパスワード等の情報を登録しようとしたときにバリデーションを設定する。

function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 0;
}

var username = new Field('my_username');
var password = new Field('my_password');

// この書き方でもOKだがコードが長くなる
// username.validate() && password.validate()

var fields = [
  username,
  password
];

var formIsValid = fields.every(function(field) {
  return field.validate();
});

if (formIsValid) {
  // サーバーにリクエストを投げる
} else {
  // エラーを表示する
}