function diffArray(arr1, arr2) {
    const newArr = [];
    const maxLength = arr1.length > arr2.length? arr1.length : arr2.length; 
    for(let i = 0; i < maxLength; i++){
      if(arr1[i] && !arr2.includes(arr1[i])){
        newArr.push(arr1[i]) 
      }
      
      if(arr2[i] && !arr1.includes(arr2[i])){
        newArr.push(arr2[i]) 
      }
    }
    return newArr;
}
  
  
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);