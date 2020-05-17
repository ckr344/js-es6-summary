// 自動スクロール

componentDidUpdate()

// App.jsx
componentDidUpdate(prevProps, prevState, snapshot) {
  const scrollArea = document.getElementById('scroll-area');
  if (scrollArea) {
    scrollArea.scrollTop = scrollArea.scrollHeight;
  }
}
// scrollHeightは公式ドキュメントに記載あり
// moz://a >> MDN web docs >> Elements.scrollHeightを参照

// Chats.jsx
return (
  <List id={"scroll-area"}>
    {/* 中略 */}
  </List>
)


