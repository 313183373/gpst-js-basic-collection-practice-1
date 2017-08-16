'use strict';
module.exports = function collectSameElements(collectionA, collectionB) {
    return collectionA.filter((value,index,arr)=>collectionB.includes(value));
}
