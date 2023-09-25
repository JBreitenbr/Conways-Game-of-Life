export let emptyGrid=(nCells)=>{
let gridArr=[];

for(let i=0; i<nCells*nCells;i++){
  gridArr.push({})
}
for(let i=0; i<gridArr.length;i++){
  gridArr[i]["id"]=i;
}

for(let i=0; i<nCells*nCells;i++){
  gridArr[i]["alive"]=0;
}
  return gridArr;
}

