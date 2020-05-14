// 分割代入(destructuring) について


var expense = {
  type: '交際費',
  amount: '4500 JPY'
};

// ES5の場合
var type = expense.type;
var amount = expense.amount

// ーーーー

// ES6の場合
const { type } = expense;
const { amount } = expense;

type;
amount;

// および
const { type, amount } = expense;

type;
amount;



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



// 関数の引数で分割代入



var savedFile = {
  extension: 'jpg',
  name: 'profile',
  size: 14040
}

function fileSummary({ name, extension, size }) {
  return `${name}.${extension}の容量は${size}です。`
}

fileSummary(savedFile);



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



// 第2引数にも分割代入は可能



var savedFile = {
  extension: 'jpg',
  name: 'profile',
  size: 14040
}

function fileSummary({ name, extension, size }, { username }) {
  return `${username}: ${name}.${extension}の容量は${size}です。`
}

fileSummary(savedFile, { username: 'Ken' });



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



// 配列に対しての分割代入

// 配列からは要素を抽出できる・・・大括弧
// オブジェクトからはプロパティを抽出できる・・・中括弧

// 配列は大括弧となる

const companies = [
  'Google',
  'Facebook',
  'Uber'
];

const [ name, name2, name3 ] = companies;

// nameにはGoogle
// name2にはFacebook
// name3にはUber
// が入っている



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



// restを応用させる

// restでGoogle以外を配列に入れて出力


const companies = [
  'Google',
  'Facebook',
  'Uber'
];

const [ name, ...rest ] = companies;

name;
rest;



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// 配列とオブジェクトを同時に分割代入する


const companies = [
  { name: 'Google', location: 'マウンテンビュー' },
  { name: 'Facebook', location: 'メンロパーク' },
  { name: 'Uber', location: 'サンフランシスコ' }
]

// 中括弧と大括弧の組み合わせでマウンテンビューだけを抽出
const [{ location }] = companies;

location




// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー




// 中括弧と大括弧の組み合わせでマウンテンビューだけを抽出
const Google = {
  location: ['マウンテンビュー', 'ニューヨーク', 'ロンドン']
};

const { location: [ first ] } = Google;

first;



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



// 実際の具体例①


function signup({ username, password, email, birthday, city }) {
  // ここでユーザーを作成してDBに保存する
}

const user = {
  username: 'myusername',
  password: 'mypassword',
  email: 'myemail@example.com',
  birthday: '2020/1/1',
  city: '東京'
};

signup(user);



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



// 実際の具体例②



const points = [
  [4, 5],
  [10, 1],
  [0, 40]
];

points.map(([ x, y ]) => {
  return { x, y };
});



