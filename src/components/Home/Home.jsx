import React from "react";
import WithAuthorization from "../../authGard/WithAuthorization";

function Home(props) {
  // console.log("props", props);
  return (
    <div className="home">
      <h1>Home Page</h1>
    </div>
  );
}
const condition = (authUser) => !!authUser;
export default WithAuthorization(condition)(Home);
