import React from "react";
import { RequireAuth } from "../../../components";

const GatewayDelete = () => {
  return <div>Delete</div>;
};

export default RequireAuth(React.memo(GatewayDelete));
