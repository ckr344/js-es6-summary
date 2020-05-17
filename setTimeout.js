
setTimeout()
// で遅延表示をする

// App.jsx

// コンポーネントの初期化時

// before
this.displayNextQuestion(nextQuestionsId)

// after
case (nextQuestionId === 'init'):
  setTimeout(() => this.displayNextQuestion(nextQuestionId), 500);
  //　　　　　　コールバック関数　　　　　　　　　　　　　　　　　　　　delay値
  break;

