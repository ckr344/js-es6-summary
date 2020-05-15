// promiseについて

// 通常JSはリクエストを送ってJSが動作したら、レスポンスがくる前に実行される

// リクエストを送って、レスポンスがきてから実行させるための仕組み

// 他の言語だとsleepというものがある

// promiseとajaxは必ずセットではないが、一緒に使われることが多い





// Promiseは3つの状態がある


// ①unresolved
// 未解決
// 処理が終わるのを待っている
// データを取得している最中

// ーーーーーーーーーーー

// ②resolved
// 成功
// 処理が終わって成功した

// ②resolvedのあと③
// then
// 成功した後の処理

// ーーーーーーーーーーー

// ②rejected
// 失敗
// 処理は失敗で終わった

// ②rejectedのあと③
// catch
// 失敗した後の処理





promise = new Promise((resolve, reject) => {
  // 成功した場合はresolveを呼ぶ
  resolve();

  // 失敗した場合はrejectを呼ぶ
  reject();
});


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// thenとcatch


// then


promise = new Promise((resolve, reject) => {
  // 成功した場合はresolveを呼ぶ
  resolve();
});

// promiseにthenはいくらでも登録することができる
promise
    .then(() => {
      console.log('処理が成功しました')
    })
    .then(() => {
      console.log('ここも実行されるよ')
    });



// catch


promise = new Promise((resolve, reject) => {
  // 成功した場合はresolveを呼ぶ
  reject();
});

// promiseにthenはいくらでも登録することができる
promise
    .then(() => {
      console.log('処理が成功しました')
    })
    .then(() => {
      console.log('ここも実行されるよ')
    })
    .catch(() => {
      console.log('問題発生！')
    });



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



// 実際の具体例

promise = new Promise((resolve, reject) => {
  // 3秒かかる何かしらの処理をした
  setTimeout(() => {
    resolve();
  }, 3000)
  reject();
});

// 3秒後にthen or catchが呼ばれる
promise
    .then(() => {
      console.log('処理が成功しました')
    })
    .then(() => {
      console.log('ここも実行されるよ')
    })
    .catch(() => {
      console.log('問題発生！')
    });















