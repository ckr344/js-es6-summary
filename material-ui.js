// Material-UIのスタイル変更方法

①Hook API
Material-UIのサンプルコードと同じ

②Styled components API
コンポーネントのシンタックスに直接スタイルを適用

③Higher-order component API
スタイルを当てたコンポーネントを返すコンポーネント

ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

Hook APIの使い方

①インストール
　npm install --save @material-ui/styles

②import
  import {createStyles, makeStyles} from "@material-ui/core/styles"

③関数を定義
  const useStyles = makeStyles(() => {
    createStyles({
      "root": {
        padding: 0
      }
    }),
  });


ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


記述ルール

①json形式

②キャメルケースで書く

③数値はそのまま

④クォーテーションで文字列を囲む

const useStyles = makeStyles(() =>
  createStyles({
    "button": {
      borderColor: "#FFB549",
      color: "FFB549",
      fontWeight: 600,
      marginBottom: "8px",
        "&:hover": {
        backgroundColor: "FFB549",
        color: "#fff"
      }
    }
  }),
)


ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


適用方法

①コンポーネント内で宣言

②オブジェクト型として使える

const Answer = (props) => {
  const classes = useStyles();

  return (
    <Button className={classes.button}>
      {props.answer.content}
    </Button>
  )
}
