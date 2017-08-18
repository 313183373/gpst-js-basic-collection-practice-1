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

function map(arr,callback){
    let temp=new Array(arr.length);
    for(let i=0;i<arr.length;i++){
        temp[i]=callback(arr[i],i,arr);
    }
    return temp;
}

function reduce(arr,callback,pre){
    pre=arr[0];
    for(let i=1;i<arr.length;i++){
        pre=callback(pre,arr[i],i,arr);
    }
    return pre;
}

let arr=[1,2,3,4,5]
console.log(map(arr,function(value,index,arr){
    return value+1;
}))
console.log(reduce(arr,function(pre,now,index,arr){
    return pre*2+now;
}));
