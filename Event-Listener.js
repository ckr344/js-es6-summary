// イベントリスナー

// アップロード画像をプレビュー



// JavaScriptイベントとは？？
// ・ユーザー操作によって引き起こされる
// ・関数が実行される
// ・結果として「振る舞い」変わる


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// イベントを設定する方法

// ①HTML要素に対応したイベント属性
<button onclick="setInnerText('hoge')">
  テキストを置き換えるよ
</button>

// ②JavaScriptでイベントリスナーを設定
const hoge = document.getElementById('hoge')
hoge.addEventListener("click", event => {
  // 処理内容
})
// 同じIDの要素に複数のイベントを実装する場合は②のほうがいい


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// イベントリスナーの使い方

<input id="image" type="file" />

const inputElement = document.getElementById('image')
inputElement.addEventListener("change", event => {
  const file = event.target.files[0];
})

// event.target → targetプロパティに値が存在する（value, text, files...etc）


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// 予期せぬ挙動を防ぐ方法

// ①
preventDefault()
// 要素のデフォルトのイベントを無効化

// ②
stopPropagation()
// 子要素のイベントが親要素にも伝播することを防ぐ

Element.addEventListener("change", event => {
  event.preventDefault();
  event.stopPropagation();
})


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// 詳細はトラハックさんのgithubを確認！