// generatorついて


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// for...ofループについて
// generatorとの連携で強みが増す


// （例1）
const colors = [ 'red', 'green', 'blue' ];

// colorにcolorsの配列の中身を1つずつ代入
for (let color of colors) {
  console.log(color);
}


// （例2）
const numbers = [ 1, 2, 3, 4 ]

let total = 0;

for (let number of numbers) {
  total += number;
}


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// generatorついて

// ES6の中で一番むずかしい


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// ①generatorとはなに？

// 何回も入ったり出たりできる関数のこと

// *を追加したらそれでgeneratorになる

// yieldとnextはgeneratorならではのキーワード

function* numbers() {
  yield;
}

const gen = numbers();
gen.next();
// => {'done':false}が返ってくる
gen.next();
//  => {'done':true}が返ってくる
// (もう一回書くと)



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



// ②generatorはなにをしてくれる？

function* shopping() {
  // 歩道の世界

  // 歩道を歩いてお店に行く

  // お店に到着したのでお金を持ってお店関連の世界に入る
  // yieldを使うと一回外の世界に出ることができる
  // yield一回目
  const stuffFromStore = yield 'お金';
  // stuffFromStoreに買った日用品が入る


  // yield二回目
  // コインランドリーに到着したので、服を持って入る
  const cleanClothes = yield '汚れた服';


  // お店関連の世界から歩道の世界に戻って、家に変える
  // 最後に戻り値があればその値をもってreturnされる
  return [stuffFromStore, cleanClothes];
  // 最後にreturnで出力
}

// お店関連の世界
const gen = shopping();
gen.next(); // 家から歩道に出る
// nextを呼ぶとgeneratorが実行される

gen.next('日用品'); 
// もう一度nextを呼ぶとgeneratorのyieldの場所から実行される
// お店で買物をして日用品をもって歩道に戻る(さっきまで実行した場所に戻っていける)
// 戻ったときに日用品をもっている

gen.next('綺麗な服');
// 値を持ってgeneratorに帰る


// 出力の順番
{"value":"お金","done":false}
{"value":"汚れた服","done":false}
{"value":["日用品","綺麗な服"],"done":true}
// 最後がtrue



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



// generatorを使ってイテレーション

function* colors() {
  yield 'red',
  yield 'blue',
  yield 'green';
}

// const gen = colors();
// gen.next();
// gen.next();
// gen.next();
// gen.next();

// for ofを組み合わせることでいい感じに順番に処理をやってくれる
const myColors = [];
for (let color of colors()) {
  myColors.push(color);
}

myColors

// 上記の出力結果
// {"value":"red","done":false}
// {"value":"blue","done":false}
// {"value":"green","done":false}
// {"done":true}
// {"done":true}
["red","blue","green"]



// ーーーーーー



const engineeringTeam = {
  size: 3,
  department: '開発部',
  lead: '太郎',
  manager: '花子',
  engineer: '次郎'
};

// 自分の好きな順番で上の要素を出したい
function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
}

const names = [];
for(let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}

names;

// 上記の実行結果
["太郎","花子","次郎"]
// いままでは配列とかコレクションであればできたが、
// generatorを使うことでオブジェクトの中身を自分の思うようにイテレートできるようにできる！



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



// generator同士の連携と委譲

// generatorのデリゲーション

// 2つのチームのひとをまとめて取り出したい

const testingTeam = {
  lead: '典子',
  tester: '隆氏'
}

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: '開発部',
  lead: '太郎',
  manager: '花子',
  engineer: '次郎'
};

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  // ここで定義
  const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
  yield* testingTeamGenerator;
  // yieldに*をつける
}

function* TestingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

const names = [];

for(let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}

names;



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



// generatorとSymbol.Iterator


















