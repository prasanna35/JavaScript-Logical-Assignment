var arr=["a","b","c"];
var arr1=[1,2,3];
var len;
var newarr=[];
if(arr.length>arr1.length){
    len=arr.length;
}
else{
    len=arr1.length;
}

for(i=0;i<len;i++){
    newarr.push(arr[i]);
    newarr.push(arr1[i]);
}
console.log(newarr);