'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let map=new Map();
    collectionA.forEach(value=>{
        map.set(value,map.has(value)?map.get(value)+1:1);
    })
    return Array.from(map).map(value=>{
        value[1]=objectB.value.includes(value[0])?value[1]-Math.floor(value[1]/3):value[1];
        return {key:value[0],count:value[1]};
    });
}
