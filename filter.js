// filterメソッド


// 一覧の中から興味があるものだけ絞り込む
// カテゴリーごととか


// filterはTrueの場合に配列に入れる役割



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


var products = [
  { name: 'きゅうり', type: '野菜' },
  { name: 'バナナ', type: 'フルーツ' },
  { name: 'セロリ', type: '野菜' },
  { name: 'オレンジ', type: 'フルーツ' }
];

// コメントアウトはforループの場合

// var filteredProducts = [];

// for (var i = 0; i < products.length; i++) {
//   if (products[i].type === 'フルーツ') {
//     filteredProducts.push(products[i]);
//   }
// }

// filteredProducts;

products.filter(function(product){
  return product.type === 'フルーツ';
})



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



var products = [
  { name: 'きゅうり', type: '野菜', quantity: 0, price: 1 },
  { name: 'バナナ', type: 'フルーツ', quantity: 10, price: 15 },
  { name: 'セロリ', type: '野菜', quantity: 30, price: 9 },
  { name: 'オレンジ', type: 'フルーツ', quantity: 3, price: 5  }
];

// 種類が野菜で、量が0個より多くて、値段が10より小さい場合

products.filter(function(product){
  return product.type === '野菜' 
      && product.quantity > 0 
      && product.price < 10;
})

// セロリが出力される



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// post.idに紐づくcommentのみを表示させたい

var post = { id: 4, title: '初めての投稿' };
var comments = [
  { postID: 4, content: 'いい記事ですね'},
  { postID: 3, content: '勉強になった'},
  { postID: 4, content: 'なるほど'}
];

function commentsForPost(post, comments) {
  return comments.filter(function(comment) {
    return comment.postID === post.id;
  });
}

commentsForPost(post, comments);







