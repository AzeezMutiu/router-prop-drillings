import React from "react";
function Background(props) {
  return (
    <>
      <section>
        <div class="wrapper">
          {/* {props.pic} */}
          <img src="./background.jpg" alt="my back" />

          <div class="wrapp">
            <h1>Connect and get ticket to</h1>
            <h1>events near you based on your</h1>
            <h1>interest</h1>
          </div>
          <div class="wrapps">
            <input type="text" id="search" placeholder="search events" />
            <input type="text" id="search" placeholder="category" />
            <button class="butt">Confirm Ticket</button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Background;
