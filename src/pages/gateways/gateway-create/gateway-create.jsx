import React from "react";
import { RequireAuth } from "../../../components";

const GatewayCreate = () => {
  return <div>Create</div>;
};

export default RequireAuth(React.memo(GatewayCreate));
