var ary1=[1,2,3,4,5];
var ary2=[11,12];
ary1.splice.apply(ary1,[1,0].concat(ary2));
console.log(ary1);