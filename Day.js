// Day.js の簡単な使い方

import dayjs from "dayjs";

// ローカライズ（日本時刻を指定）
import "dayjs/locale/ja";
dayjs.locale("ja");

// init（現在時刻でdayjsのインスタンスを作成）
const day = dayjs();

// 値の取得
const month = day.month(); // 月
const date = day.date(); // 日付

// 演算（新しいdayjsインスタンスを返す）
const nextMonth = day.add(1, "month"); // 1ヶ月後
const firstDay = day.startOf("month"); // その月の一番最初

// フォーマット
day.format("YYYY.MM.DD hh:mm"); // ex. 2019.10.23 12:01

// これを使うことで日付の操作が容易に行えます。これがないと日付を取得するだけでもかなり複雑なロジックを書くことになってしまいます。