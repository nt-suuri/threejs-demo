import { PropsWithChildren } from "react";

export const Section = ({ children, ...props }: PropsWithChildren) => {
  return (
    <div className="w-full overflow-x-hidden" {...props}>
      <div className="h-screen w-screen">{children}</div>
    </div>
  );
};
