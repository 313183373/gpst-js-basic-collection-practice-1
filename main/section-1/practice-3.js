'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    return collectionA.filter((value,index,arr)=>objectB.value.includes(value));    
}
