import React, { ReactNode } from "react";

const ConditionalRender: React.FC<{ value: boolean; children: ReactNode }> = ({
  value,
  children,
}) => {
  return <>{value && children}</>;
};

export default ConditionalRender;
