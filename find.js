// findメソッド


// 特定の値を1つみつけて出力する

// 見つけた時点でeachが回るのを止めて出力するから動きが早い

// 見つけた最初の1つ要素が出力されるので2番目の要素は出力されない


var users = [
  { name: '太郎' },
  { name: '次郎' },
  { name: '三郎' }
]

var user;

users.find(function(user){
  return user.name === '次郎';
});



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



function Car(model) {
  this.model = model;
}

var cars = [
  new Car('プリウス'),
  new Car('ノート'),
  new Car('アクア')
];

cars.find(function(car) {
  return car.model === 'アクア';
});



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



// あるコメントに紐づくpostを探す


var posts = [
  { id: 1, title: '古い投稿'},
  { id: 2, title: '新しい投稿'}
];

var comment = { postID: 2, content: 'いいね！'}

function postForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postID;
  });
}

postForComment(posts, comment);



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



// クリックしたURLのIDに紐づくPost等を開きたいとき

// URL: "forum.com/posts/45"

// 全投稿(posts)の中からIDが45のものを探す

const posts = [
  { id: 1, title: '投稿のタイトル' },
  { id: 2, title: '投稿のタイトル' },
  { id: 3, title: '投稿のタイトル' },
  { id: 4, title: '投稿のタイトル' },
  { id: 5, title: '投稿のタイトル' },
  { id: 6, title: '投稿のタイトル' },
  { id: 7, title: '投稿のタイトル' }
];

const postId = getIdFromURL();

posts.find(post => post.id === postId);



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


