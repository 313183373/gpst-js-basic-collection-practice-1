'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let map=new Map();
    collectionA.forEach(value=>{
        let [val,cnt]=value.split('-');
        cnt=cnt?parseInt(cnt):1;
        map.set(val,map.has(val)?map.get(val)+cnt:cnt);
    })
    return Array.from(map).map(value=>{
        value[1]=objectB.value.includes(value[0])?value[1]-Math.floor(value[1]/3):value[1];
        return {key:value[0],count:value[1]};
    });
}
