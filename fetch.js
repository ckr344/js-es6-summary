// fetchについて


url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url)
    // 実際のレスポンスのデータは上のresponse.jsonで取ってこれる
    .then(response => response.json())
    .then(data => console.log(data));

// Consoleで実行






// fetchの弱点


// 12345678を追加してエラーを発生させる
url = "https://jsonplaceholder.typicode.com/posts12345678/";

fetch(url)
    .then(response => console.log(response))
    .catch(error => console.log('問題発生！', error))

// 上記のようにするとresponseは返ってくるが、catchには入ってこない
// fetchでcatchが使えるのは、ネットワーク自体のリクエストが失敗した場合にcatchが動く

// 例えば
url = "https://jsonplaceholder.typicode.com12345678/posts/";
// とするとネットワーク自体のリクエストが失敗する
