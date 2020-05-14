// アロー関数 (アローファンクション)


// ルール
// ①関数の中身が一つしか評価がない場合は「中括弧」と「return」を省略することができる
// ②関数が一つしか引数をもっていない場合、引数を囲む括弧を省略することができる


// 書き方①
// こちらのほうが可読性は高い
const add = (a, b) => {
  return a + b;
}

// 書き方②
const add = (a, b) => a + b;

add(1, 2)


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// 通常時の書き方
const double = function(number) {
  return 2 * number;
}

double(8);


// アロー関数の書き方
const double = (number) => {
  return 2 * number;
}

double(8);


// 省略①
const double = (number) => 2 * number;

double(8);


// 省略②(引数が1つの場合のみ)
const double = number => 2 * number;

double(8);


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


const numbers = [1, 2, 3];


// 通常時のmapの書き方
numbers.map(function(number) {
  return 2 * number;
});


// アロー関数の省略形
numbers.map(number => 2 * number);


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// アロー関数の重要な機能


const team = {
  members: ['太郎', '花子'],
  teamName: 'スーパーチーム',
  teamSummary: function() {
    return this.members.map(function(member) {
      return `${member}は${this.teamName}の所属です。`;
    });
  }
};

team.teamSummary();

// この文法だとthisがアンディファインドエラーになる
// コールバック関数(teamSummary: function)は別世界で実行されている。
// なのでthisがteamを拾えないからエラーになる。

// ↓

// アロー関数を使うと解決する

const team = {
  members: ['太郎', '花子'],
  teamName: 'スーパーチーム',
  teamSummary: function() {
    // アロー関数を使うと、this === teamとなる
    return this.members.map((member) => {
      return `${member}は${this.teamName}の所属です。`;
    });
  }
};

team.teamSummary();

// 理由は
// アロー関数は lexical this を使用しているから。
// lexical this ＝ 構文的なthis


