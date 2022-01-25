import React from "react";
import { RequireAuth } from "../../../components";

const GatewayDetails = () => {
  return <div>Details</div>;
};

export default RequireAuth(React.memo(GatewayDetails));
