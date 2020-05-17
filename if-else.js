// （条件式メモ1）
// ifのみ
// リストの中身が入ってないときにはLoading中の画面を表示させる
{(list.length === 0) && (
  <Loading />
)}

// （条件式メ2）
// if else
// isQuestionがtrueかfalseで表示をかえる
{isQuestion ? (
  <Avatar alt="icon" src={Torahack} />
) : (
  <Avatar alt="icon" src={NoProfile} />
)}