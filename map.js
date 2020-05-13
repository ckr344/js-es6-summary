// mapメソッド

// 一覧表示等に使用する



// numberに入っている数字をそれぞれ2倍にして出力する。

// 元の配列の値は変えないのがルール

// mapは新しい配列に戻り値を返してくれる

var numbers = [1, 2, 3];

var doubled = numbers.map(function(number){

  // returnは新しい配列(doubled)に値を戻している
  return number * 2;
})

doubled;




// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



// あるオブジェクトの中からある部分を抜き取ってくる


var cars = [
  { type: '軽自動車', price: '安い' },
  { type: '高級車', price: '高い' }
];

var prices = cars.map(function(car){
  return car.price;
})

prices;



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー




