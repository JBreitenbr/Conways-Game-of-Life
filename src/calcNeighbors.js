export function calcNeighbors(gridArr){
let arr=[];
let nCells=30;
for(let i=0;i<nCells;i++){
  arr.push([]);
}
for(let i=0;i<nCells;i++){
  for(let j=0;j<nCells;j++){
    arr[i].push(0);
  }
}

for(let i=0; i<nCells*nCells; i++){
  arr[(i-i%nCells)/nCells][i%nCells]=gridArr[i]["alive"];
}

let n=[];
for(let i=0; i<nCells; i++){
  n.push([]);
}
for(let i=1; i<nCells-1; i++) {
  for(let j=1; j<nCells-1; j++){
    n[i].push(arr[i][j-1]+arr[i][j+1]+arr[i-1][j-1]+arr[i-1][j]+arr[i-1][j+1]+arr[i+1][j-1]+arr[i+1][j]+arr[i+1][j+1]);
  }
}

for(let i=1; i<nCells-1; i++){
   n[i].unshift(0);
   n[i].push(0);
}

for(let j=0; j<nCells; j++){
  n[0].push(0);
  n[nCells-1].push(0);
}

  return n;
}
