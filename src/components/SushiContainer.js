import React, {useState} from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer( {sushis, eatenSushis, eatSushi}) {
  const [startIndex, setStartIndex] = useState(0)

  const nextSushis = () => {
    setStartIndex((startIndex + 4) % sushis.length)
  }
  const displayedSushis = sushis.slice(startIndex, startIndex + 4).concat(
    sushis.slice(0,Math.max(0,startIndex + 4 - sushis.length))
  )

  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {displayedSushis.map((sushi) => (
      <Sushi 
        key = {sushi.id}
        sushi = {sushi}
        eaten = {eatenSushis.includes(sushi.id)}
        eatSushi = {eatSushi}
          />
      ))}
      <MoreButton nextSushis = {nextSushis} />
    </div>
  );
}

export default SushiContainer;
