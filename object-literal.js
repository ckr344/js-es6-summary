// オブジェクトリテラル


// ①オブジェクトのキーとバリューが同じ名前の文字列だった場合は、ES6からは1回書けばOKとなる
// ②オブジェクトのバリューがfunctionだった場合は、オブジェクトのコロン(：)とfunctionが省略することができる


function createBookShop(inventory) {
  return {
    inventory: inventory,
    // 本1つ1つの価格を足し合わせた合計を出す関数
    inventoryValue: function() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    // ある本のタイトルと合致した本の価格を出す関数
    priceForTitle: function(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: 'ハリーポッター', price: 1000 },
  { title: 'JS入門', price: 1500 }
]

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();

bookShop.priceForTitle('ハリーポッター');


// ーーーーーーーーーーーーーーー改善後ーーーーーーーーーーーーーーーーーーー


// ①オブジェクトのキーとバリューが同じ名前の場合は、ES6からは1回書けばOKとなる
// ②オブジェクトのバリューがfunctionだった場合は、オブジェクトのコロン(：)とfunctionが省略することができる


function createBookShop(inventory) {
  return {
    inventory,
    // 本1つ1つの価格を足し合わせた合計を出す関数
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    // ある本のタイトルと合致した本の価格を出す関数
    priceForTitle: function(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: 'ハリーポッター', price: 1000 },
  { title: 'JS入門', price: 1500 }
]

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();

bookShop.priceForTitle('ハリーポッター');




// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー




// JQUERYの例


function saveFile(url, data) {
  $.ajax({ method: 'POST', url: url, data: data });
}

const url = 'http://fileup.com';
const data = { color: 'red' };

saveFile(url, data);


// ーーーーーーーーーーーーーーー改善後ーーーーーーーーーーーーーーーーーーー


function saveFile(url, data) {
  $.ajax({ method: 'POST', url, data });
}

const url = 'http://fileup.com';
const data = { color: 'red' };

saveFile(url, data);


