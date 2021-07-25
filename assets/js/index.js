function myArrayProto(){
  
  this.myPush = function(){
    for(let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  }

  this.myPop = function(){
    let delNum = this[--this.length];
    delete this[this.length];
    return delNum;
  }
  
  this.myShift = function(){
    let deletedNum = this[0];
    for(i = 0;i < this.length;){
      this[i] = this[++i]; 
    }
    if(this.length!==0){
      delete this[--this.length];
      return deletedNum;
    }else {
      return null;
    }
  }

  this.myUnShift = function(){
    for(i = arguments.length - 1;i >= 0;i--){
      for(j = this.length - 1;j >= 0; j--){
        this[j + 1] = this[j];
      }
      this[0] = arguments[i];
      this.length++;
    }
    return this.length;
}

  this.myConcat = function(anotherArray){
    let concatArr = new MyArray();
    concatArr.length = this.length;
    for(i=0;i<anotherArray.length;i++){
      concatArr[i] = this[i];
      concatArr[concatArr.length++] = anotherArray[i]; 
    }
    return concatArr;
  }
  
//aдвансед level

   this.myReverse = function(){
    let temporaryArr = new MyArray();
    count = 0;
    for(j=0;j<this.length;j++){
      temporaryArr[j] = this[j];
    }
    for(i=this.length-1;i>=0;i--){
      this[count++] = temporaryArr[i];
    }
    return this;
   }
    
   this.myReverse2 = function(){
    let temp;
    let x = 0;
    let y = this.length-1;
    while(x < y) {
      temp = this[0];
      this [0] = this[y];
      this[y] = temp;
      x++;
      y--;
    }
   }

   this.myForEach = function(func){ 
      for(i=0;i<this.length;i++){
        func(this[i],i);
      }
   }

   this.myMap = function(func){
      let cloneArr = new MyArray();
      for(i=0;i<this.length;i++){
        cloneArr[i] = func(this[i]);
        cloneArr.length++;
      }
      return cloneArr;
   }
}

let summ = function(elem){
  return elem+1;
}


function MyArray () {
  this.length = 0;
  for(let i = 0; i < arguments.length; i++) {
    this.myPush(arguments[i]);
  }
}


MyArray.prototype = new myArrayProto();

let arr1 = new MyArray(1,2,3);
let arr2 = new MyArray(11,22,33,44);