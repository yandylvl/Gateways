import React from "react";
import { RequireAuth } from "../../../components";

const GatewayEdit = () => {
  return <div>Edit</div>;
};

export default RequireAuth(React.memo(GatewayEdit));
