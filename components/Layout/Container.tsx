import { PropsWithChildren } from "react";

const Container = ({ children, ...props }: PropsWithChildren) => (
  <div className="max-w-[1480px] overflow-x-hidden h-full w-full">
    {children}
  </div>
);

export default Container;
