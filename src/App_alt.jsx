import './App.css'
import {useState,useRef,useCallback} from 'react';
import {randomGrid} from './randomGrid.js';
import {emptyGrid} from './emptyGrid.js';
import {patterns1} from './patterns1.jsx';
import {patterns2} from './patterns2.jsx';
import Description from './Description';
import Description1 from './Description1';
import Description2 from './Description2';
import {calcNeighbors} from './calcNeighbors.js';

import {useInterval} from "./useInterval.jsx";
export default function App() {
   const [grid, setGrid] = useState(() => randomGrid(30)
);
const toggleLife = e => {
    const id = e.target.dataset.id;
    const newGrid = grid.map(cell => {
      if (cell.id === +id) {
        return {
          alive: !cell.alive,
          id: +id
        };
      } else {
        return cell;
      }
    });

    setGrid(newGrid);
  };

const handleClick=(patternNo,gridType)=>{
  setGrid(gridType(30));
  setGen(0);
  setRunning(false);
  setPatternType(patternNo);
}
    const [running, setRunning] = useState(false);

const [patternType,setPatternType]=useState(0);
const [millisecs,setMillisecs]=useState(700);

  const [gen, setGen]=useState(0);
  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback((grid) => {
    if (!runningRef.current) {
      return;
    }


  const nextGen = grid.map((cell, ind)=>{
  let nCells=30;
  let nb=calcNeighbors(grid)[(ind-ind%nCells)/nCells][ind%nCells];
  if(cell.alive && (nb < 2 || nb > 3)){ 
  return {...cell, prev: cell.alive,neighbors: nb, alive:!cell.alive}
}
  if(!cell.alive && nb==3){
    return {...cell, prev: cell.alive,neighbors:nb,alive:!cell.alive}
  }

    return {...cell,prev:cell.alive, neighbors: nb,alive:cell.alive}});
    setGrid(nextGen);
    if(patternType!=2){
    setGen(prev=>prev+1);
    }
    if(patternType==2){
      setGen(prev=>(prev+1)%31)
    }
    if(gen%31==0 && patternType==2){
      setGrid(patterns2(30));
    }
  }, [gen]);

  useInterval(() => {
    runSimulation(grid);
  }, millisecs);
  
  return (<main><h3 id="title">Conway's Game of Life</h3>
    
<div className="container-fluid wrapper">
 
  <input
  className="sliderLight"
	type="range"
	min="10"
	max="2000"
	onChange={(e) => setMillisecs(e.target.value)}
  value={millisecs}
/><div className="slider-desc">
 refreshes every {millisecs} ms (adjustable)</div>
  </div>
<div className="container-fluid btn-group">
<button className="btn-custom" style={{width:"24vw"}} onClick={() => {
setRunning(!running);
if (!running) {
  runningRef.current = true;
  }
}}><span>{running ? "Stop" : "Start/Continue"}</span>
</button>
<button className="btn-custom" onClick={()=>handleClick(0,randomGrid)}>Random</button>
<button className="btn-custom" style={{width:"22vw"}}
  onClick={() => 
  handleClick(1,patterns1)}><span>Patterns 1</span></button>
<button className="btn-custom" style={{width:"22vw"}} onClick={()=>handleClick(2,patterns2)}>Patterns 2</button>
<button className="btn-custom" onClick={()=>handleClick(-1,emptyGrid)}>Clear</button></div>
  <div className="wrapper">
    <div className="grid">
      {grid.map((cell,ind)=>{
    return(<div key={cell.id}
             data-id={cell.id}
        onClick={toggleLife}
        className={cell.alive?"alive":"dead"}>
            </div>)
      })}</div></div><p id="gen">Generation: {gen}</p>
{(patternType==0 || patternType==-1) && <Description/>}
    {patternType==1 && <Description1/>}
        {patternType==2 && <Description2/>}
  </main>)
  }
