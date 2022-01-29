import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const requireAuth = (ChildComponent) => {
  return (props) => {
    const navigate = useNavigate();

    const location = useLocation();

    const isSignedIn = useSelector((state) => state.auth.isSignedIn);

    useEffect(() => {
      shouldNavigateAway();
    });

    const shouldNavigateAway = () => {
      if (!isSignedIn) {
        navigate("/login", {
          state: { from: location.pathname },
        });
      }
    };

    return <ChildComponent {...props} />;
  };
};

export default requireAuth;
