// 2. Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.

function bblSort(arr){
    
    for(let i = 0; i < arr.length; i++){
       
     
      for(let j = 0; j < ( arr.length - i -1 ); j++){
         
     
        if(arr[j] > arr[j+1]){
           
        
          let temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
        }
      }
    }

    console.log('Ejercicio 2:')
    console.log(arr);
   }
    
    
   
   let arr = [2, 32, 100, 1,  4, 8, 7, 87];
    
    

   bblSort(arr);
   