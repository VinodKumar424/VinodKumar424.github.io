
//bubble sort es6 example
let bubbleSort = (arr) => {
    let n = arr.length;
    
    for(let i = 0; i < n - 1; i++){
      for(let j = 0; j <= n - i - 1; j++){
          if(arr[j] > arr[j+1]){              //Swapping the umbers
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
          }
      }
    }
    
    return arr;
  }
  console.log(bubbleSort([6,4,3,8,5,1,0,2]));


  //Assignement

  let bubble_Sort=(a)=>{
    let swapp;
    let n=a.length-1;
    let x=a;
    do{
      swapp=false;
      for(let i in a)
      {
        if(x[i]<x[i+1])
        {
          let temp=x[i];
          x[i]=x[i+1];
          x[i+1]=temp;
          swapp=true;
        }
      }
      n--;
    }while(swapp);
    return x;
  }
  
  let array=bubble_Sort([8,6,4,2]);
  console.log(array);