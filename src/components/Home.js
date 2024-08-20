import React from "react";
import * as media from "../data/user"

function Home() {
  return (
    <div id="home">
      <h1>
        {media.username} is a Web Developer from {media.city}
      </h1>
    </div>
  );
}
export default Home
