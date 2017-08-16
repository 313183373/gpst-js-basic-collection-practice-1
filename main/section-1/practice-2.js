'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    return collectionA.filter((value,index,arr)=>collectionB[0].includes(value));
}
