// コールバック関数のbind()

// パフォーマンス向上

constructor(props) {
  super(props);
  this.selectAnswer = this.selectAnswer.bind(this)
}

selectAnswer = (selectAnswer, nextQuestionId) => {
  // 処理を記述
};

render() {
  return (
    <AnswersList
     answers={this.state.answers}
     select={this.selectAnswer}
     />
  )
}