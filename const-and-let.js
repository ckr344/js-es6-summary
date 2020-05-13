// const
// let
// var


// 変数定義


// constとletはES6ならではの新機能


// ES6ではvarを使うことはない


// varの場合
var color = 'red';
color;

// ーーーーーーーー

// varの場合
var name = '太郎';
var title = 'Webアプリケーションエンジニア';
var hourlySalary = 4000;


// RS6の場合

// const
// 変わる予定のないものをconstで宣言する

// let
// 変わる可能性のあるものをletで宣言する

const name = '太郎'
let title = 'Webアプリケーションエンジニア';
let hourlySalary = 3500;

// 時間が経過したとして・・・

title = 'リードWebアプリケーションエンジニア';
hourlySalary = 4500;


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// なぜvarのままでなくて、constとletになったのか
// コードの可読性が高まる
// 他人がリファクタリングをしやすくなる
// 値が変わる可能性があるかないかがひと目で分かる


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// コツ
// とりあえずconstで定義しておいて、変わる可能性のあることに気付いた場合はletに変える








