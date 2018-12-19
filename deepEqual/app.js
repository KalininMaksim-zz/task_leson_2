let obj1 = {a:1, b:2, c:3};
let obj2 = {a:1, b:2, c:3, d:4};


function deepEqual( obj1, obj2 ) {
  // debugger;
  if( typeof obj1 !== 'object' && typeof obj2 !== 'object' ) {
    return obj1 === obj2;
  };
    if( Object.keys( obj1 ).length !== Object.keys(obj2).length) {
      return false;
    };
    if( typeof obj1 == 'object' && typeof obj2 == 'object' ){ 
      Object.keys( obj1 ).forEach(( key )=> {
        if( !deepEqual(obj1[key], obj2[key]) ){
          return false;
        }
      });
      return true;
    };

};
console.log(deepEqual( obj1, obj2 ));