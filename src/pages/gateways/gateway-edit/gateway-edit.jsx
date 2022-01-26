import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RequireAuth } from "../../../components";
import { getGateway } from "../../../store/modules/entities/gateways";

const GatewayEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: gatewayId } = useParams();

  const { selected: gateway } = useSelector((state) => state.entities.gateways);

  useEffect(() => {
    dispatch(getGateway(gatewayId));
  }, [dispatch, gatewayId]);

  return <div>{JSON.stringify(gateway)}</div>;
};

export default RequireAuth(React.memo(GatewayEdit));
