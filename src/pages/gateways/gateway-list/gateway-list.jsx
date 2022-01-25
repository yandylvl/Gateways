import React from "react";
import { RequireAuth } from "../../../components";

const GatewayList = () => {
  return <div>List</div>;
};

export default RequireAuth(React.memo(GatewayList));
