export default function DescPatterns2() {
  return (
    <div className="game_description">
<h6>Still Lifes and Spaceships</h6>
<p>A <span className="bold">still life</span> is a pattern that does not change from one generation to the next. The ones in the bottom are (from left to right):<span className="bold"> beehive, boat </span> and <span className="bold">block</span></p>
<p>A <span className="bold">spaceship</span> is a finite pattern that returns to its initial state after a number of generations, but in a different location. The most famous is the <span className="bold">glider</span >, starting on the left. The one which starts in the middle is a so called <span className="bold">middleweight spaceship</span>, and the one above is an MWS on an MWS.
Here the simulation is limited to 30 generations, as the area of the board is finite.
</p>
</div>)
}
