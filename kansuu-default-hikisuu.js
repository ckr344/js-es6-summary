// 関数のデフォルト引数を指定する


// デフォルトでmethodをgetにしたい場合


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// ES5の場合

function makeAjaxRequest(url, method) {
  if (!method) {
    method = 'GET'
  }

  // ajaxリクエストをするロジックがここにあると想定
}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'POST');


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// ES6の場合

function makeAjaxRequest(url, method = 'GET') {
  return method;
  // ajaxリクエストをするロジックがここにあると想定
}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'POST');

// 空の引数を渡したい場合(デフォルト値も反映させたくない場合)
makeAjaxRequest('google.com', null);


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// デフォルト引数の使いどころ


管理者IDをデフォルトで付与したい

function User(id) {
  this.id = id;
}

function generateID() {
  return Math.random() * 999999;
}

function createAdminUser(user = new User(generateID())){
  user.admin = true;

  return user;
}

createAdminUser();




