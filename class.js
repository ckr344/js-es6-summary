// classについて


// JSのclassにはプロトタイプチェーンの仕組みが使われている


// 他の言語のClassとは意味が違う


// ES5の場合
function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function() {
  return 'ウィーン';
}

var car = new Car({ title: 'プリウス' });

car;
car.drive();




// ES6の場合

// constructorは初期化されるときに呼ばれる

class Car {
  constructor({ title }) {
    this.title = title;
  }

  drive() {
    return 'ウィーン';
  }
}

const car = new Car({ title: 'アクア' });
car
car.drive;



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



// クラス間の継承



class Car {
  constructor({ title }) {
    this.title = title;
  }

  drive() {
    return 'ウィーン';
  }
}

// extendsは継承するという意味
class Toyota extends Car {
  constructor(options) {
    // superは親のClassのconstructorを継承するという意味
    // 今回でいうとCarのtitile
    super(options);
    this.color = options.color;
  }

  honk() {
    return 'ブブー！！';
  }
}

const toyota = new Toyota({ color: 'red', title: 'アクア' });

toyota;
toyota.drive();
toyota.honk();



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



// 実際のclassの使いどころ


// classがあることで他の言語をやってたひとも直感的にわかるようになった。


// ReactもこのClassが使われだしてからわかりやすくなった。



React.createClass({
  doSomething() {
  },

  doSomethingElse() {
  }
});

// React側が用意している「Component」を継承
class MyComponent extends Component {
  doSomething() {
  }

  doSomethingElse() {
  }
}

// 上で作った「MyComponent」をさらに継承
class MyOtherComponent extends MyComponent {
  
}








