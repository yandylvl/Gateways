import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const Toast = () => {
  const { errors: gatewaysError } = useSelector(
    (state) => state.entities.gateways
  );
  const { errors: authError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (gatewaysError.length)
      toast.error(gatewaysError[gatewaysError.length - 1]);
    if (authError.length) toast.error(authError[authError.length - 1]);
  }, [gatewaysError, authError]);

  return <ToastContainer />;
};

export default Toast;
