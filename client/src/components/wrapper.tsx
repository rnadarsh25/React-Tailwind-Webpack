import React, { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};

function Wrapper({ children }: WrapperProps) {
  return <div className="container mx-auto">{children}</div>;
}

export default Wrapper;
