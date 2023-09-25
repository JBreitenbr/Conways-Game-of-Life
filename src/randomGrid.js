export let randomGrid=(nCells)=>{
let gridArr=[];

for(let i=0; i<nCells*nCells;i++){
  gridArr.push({})
}
for(let i=0; i<gridArr.length;i++){
  gridArr[i]["id"]=i;
}

let h={
  0:1,
  1:0,
  2:0,
  3:1,
  4:0,
  5:1,
  6:0
}
for(let i=0; i<nCells*nCells;i++){
  gridArr[i]["alive"]=h[Math.floor(Math.random()*7)];
}
  return gridArr;
}

