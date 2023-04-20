
function exampleOne(first, second, dataType){
  if(typeof(first) !== dataType && typeof(second) !== dataType){
    return new Error(`매개변수 first, second는 모두 ${dataType} 타입이어야 합니다.`)
  }
}

function arrayLengthEven(array){
  if(array.length % 2 === 0){
    return true;
  }
  else{
    return false;
  }
}

function isExampleTwo(first, second, dataType){
  exampleOne(first, second, dataType);

  let booleanResult;

  if(first < second){
    booleanResult = true;
  }
  else{
    booleanResult = false;
  }

  if(typeof(booleanResult) === 'boolean'){
    return booleanResult;
  }
  else{
    return new Error("조건식이 boolean이 아니여서 리턴하지 못했습니다.")
  }
}

let basicData = [4,6,23,5,94,35,44,66];

function exampleThree(array, functionOne, functionTwo){
  // console.log(typeof(functionOne) ,typeof(functionTwo))
  //매개변수 인자로 들어오는 함수 두개는 데이터타입이 모두 함수여야 함.
  if (typeof(functionOne) !== 'function' || typeof(functionTwo) !== 'function'){
    return new Error("두 함수가 모두 function이 아니여서 실행하지 못 했습니다.")
  }
  
  //매개변수 array의 모든 원소는 숫자 정수여야 함.
  if(!array.every(value => Number.isInteger(value))){
    return new Error("배열의 모든 값은 숫자 정수여야 합니다.")
  }
  
  //매개변수 array의 배열 길이(length)는 짝수여야 함. 홀수라면 10을 추가하여 짝수로 만듦
  if(!arrayLengthEven(array)){
    array.push(10);
  };
  

  let arrayResult = [[null,null], [null,null], [null,null], [null,null]];
  //매개변수 array는 배열의 순서 한쌍 씩 값의 크기를 비교
  //비교한 작은 값은 arrayResult의 원소배열 0번째
  //큰 값은 arrayResult의 원소배열 1번째에 넣어준다.

  let diff;
  for(let i = 0; i < array.length; i += 2){
    diff = isExampleTwo(array[i], array[i+1], 'number');
    
    if(diff){
      console.log(i/2, 1%2, (i+1)%2);
      arrayResult[i/2][i%2] = array[i];
      arrayResult[i/2][(i+1)%2] = array[i+1];
    }
    else{
      arrayResult[i/2][i%2] = array[i+1];
      arrayResult[i/2][(i+1)%2] = array[i];
    }
  }

  return arrayResult;
}

console.log(exampleThree(basicData, exampleOne, isExampleTwo))