'use strict';

module.exports = function countSameElements(collection) {
    let map=new Map();
    collection.forEach(value=>{
        map.set(value,map.has(value)?map.get(value)+1:1);
    })
    return Array.from(map).map(value=>{return {key:value[0],count:value[1]}});
}
