import React from "react";
import ProtectedPage from "./ProtectedPage";
ProtectedRoute.propTypes = {};

function ProtectedRoute({ children, ...rest }) {
  return <ProtectedPage />;
}

export default ProtectedRoute;
