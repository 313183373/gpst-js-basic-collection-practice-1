'use strict';

module.exports = function countSameElements(collection) {
    let map=new Map();
    collection.forEach(value=>{
        let [val,cnt]=value.split('-');
        cnt=cnt?parseInt(cnt):1;
        map.set(val,map.has(val)?map.get(val)+cnt:cnt);
    })
    return Array.from(map).map(value=>{return {key:value[0],count:value[1]}});
}
