// テンプレートリテラル (テンプレート文字列)


// ES5の場合

function getMessage() {
  const year = new Date().getFullYear();

  return "今年は" + year + "年です。"
}

getMessage();


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// ES6の場合

// 「`」＝バッククォート
// 「$」＝ダラー

// 文字列の中でJSの表記ができるようになる

function getMessage() {
  const year = new Date().getFullYear();

  return `今年は${year}年です。`
}

getMessage();



