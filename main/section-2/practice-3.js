'use strict';

module.exports = function countSameElements(collection) {
    let map=new Map();
    collection.forEach(value=>{
        let cnt,val;
        if(value.length>2){
            [val,cnt]=value.split('-');
            if(!cnt){
                [val,cnt]=val.split(':')
            }
            if(!cnt){
                [,val,cnt,]=val.split(/^(\w)\[(\d+)\]/);
            }
        }else{
            val=value;
        }
        cnt=cnt?parseInt(cnt):1;
        map.set(val,map.has(val)?map.get(val)+cnt:cnt);
    })
    return Array.from(map).map(value=>{return {name:value[0],summary:value[1]}});
}
