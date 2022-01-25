import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequireAuth } from "../../../components";
import { GatewayCard } from "../../../components/gateway";
import { loadGateways } from "../../../store/modules/entities/gateways";

const GatewayList = () => {
  const dispatch = useDispatch();

  const gateways = useSelector((state) => state.entities.gateways.list);

  useEffect(() => {
    dispatch(loadGateways());
  }, [dispatch]);

  return (
    <div>
      <GatewayCard />
    </div>
  );
};

export default RequireAuth(React.memo(GatewayList));
