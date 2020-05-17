// 外部リンクに飛ばす

test()
// を用いる

// moz://a >> MDN web docs >> RegExp.prototype.test()を参照

// test()メソッドは、正規表現と指定された文字列の一致を調べるための検索を実行する。
// trueまたはfalseを返す。

(/^https:*/)

// と書くことで、「https:から始まる文字列だったときに」という正規表現になる
// （）内は正規表現

// NextIDがURLだったときに外部リンクに飛ばす
case (/^https:*/.test(nextQuestionsId)):
  const a = document.createElement('a');
  a.href = nextQuestionsId;
  a.target = '_blank';
  a.click();
  break;

// _blankは別タブ