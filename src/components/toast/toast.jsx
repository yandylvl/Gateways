import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const Toast = () => {
  const { errors } = useSelector((state) => state.entities.gateways);

  useEffect(() => {
    if (errors.length) toast.error(errors);
  }, [errors]);

  return <ToastContainer />;
};

export default Toast;
