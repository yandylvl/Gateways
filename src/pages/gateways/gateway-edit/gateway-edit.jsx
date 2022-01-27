import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { GatewayForm, ProgressBar, RequireAuth } from "../../../components";
import {
  editGateway,
  getGateway,
} from "../../../store/modules/entities/gateways";

const GatewayEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: gatewayId } = useParams();

  const { selected: gateway, errors } = useSelector(
    (state) => state.entities.gateways
  );

  const [peripherals, setPeripherals] = useState(gateway?.peripherals);

  const initUID = gateway?.peripherals.reduce((a, b) => a + (b.UID || 0), 0);
  const [UID, setUID] = useState(initUID);

  useEffect(() => {
    dispatch(getGateway(gatewayId));
  }, [dispatch, gatewayId]);

  useEffect(() => {
    setPeripherals(gateway?.peripherals);
    setUID(initUID);
  }, [gateway, initUID]);

  const onSubmit = (data) => {
    dispatch(
      editGateway({
        id: gateway?.id,
        serialNumber: gateway?.serialNumber,
        name: data.name,
        address: data.address,
        peripherals: peripherals,
      })
    );

    navigate("/gateways");
  };

  return (
    <React.Fragment>
      {!gateway ? (
        <ProgressBar />
      ) : (
        !errors.length && (
          <GatewayForm
            peripherals={peripherals}
            setPeripherals={setPeripherals}
            UID={UID}
            setUID={setUID}
            onSubmit={onSubmit}
            action="Edit"
            serialNumber={gateway?.serialNumber}
            name={gateway?.name}
            address={gateway?.address}
            disableSN={true}
          />
        )
      )}
    </React.Fragment>
  );
};

export default RequireAuth(React.memo(GatewayEdit));
