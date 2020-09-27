import React from "react";
import WithAuthorization from "../../authGard/WithAuthorization";
import * as ROLES from "../../constants/roles";
import "./Admin.css";
function Admin() {
  return (
    <div className="admin">
      <h1>Admin page</h1>
    </div>
  );
}
const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];
export default WithAuthorization(condition)(Admin);
