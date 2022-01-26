import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { GatewayForm, RequireAuth } from "../../../components";
import { addGateway } from "../../../store/modules/entities/gateways";

const GatewayCreate = () => {
  const [peripherals, setPeripherals] = useState([]);
  const [UID, setUID] = useState(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(
      addGateway({
        id: data.serialNumber.toUpperCase(),
        serialNumber: data.serialNumber,
        name: data.name,
        address: data.address,
        peripherals: peripherals,
      })
    );

    navigate("/gateways");
  };

  return (
    <GatewayForm
      peripherals={peripherals}
      setPeripherals={setPeripherals}
      UID={UID}
      setUID={setUID}
      onSubmit={onSubmit}
      action="Create"
    />
  );
};

export default RequireAuth(React.memo(GatewayCreate));
