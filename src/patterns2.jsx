export let patterns2=(nCells)=>{
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
  
  let arr=[543,571,573,602,603,590,591,592,593,594,560,565,530,501,505,473,94,95,96,97,98,123,128,158,187,183,243,247,278,308,303,334,335,336,337,338,802,803,831,833,862,807,808,837,838,766,795,797,825,827,856/*,176,178,147,148,207*/];
  for(let i of arr){
  gridArr[i]["alive"]=1;
  }
  return gridArr;
}

