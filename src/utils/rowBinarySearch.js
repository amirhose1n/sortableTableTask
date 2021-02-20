function rowBinarySearch(arr, val , callback) {

    (function BinarySearch(start = 0 , end = arr.length){
      const result = [];
       const checkDuplies = (index) => {
        result.push(index);
        if( arr[index -1] && new Date(arr[index -1].date).getTime() === new Date( val ).getTime()) {
          checkDuplies(index - 1);
        }else{
          callback(result)
          return ;
        }
      }
      // if (start >= end) return end - 1; // base case
      if (start >= end) return checkDuplies( end - 1); // base case
      const mid = (start + end) >> 1; // Use shift, so you don't need to `floor`.
      return new Date(val) < new Date(arr[mid].date)
      ? BinarySearch(start, mid)
      : BinarySearch(mid + 1, end);
      })();
  
  }

  export default rowBinarySearch;