import { PropsWithChildren } from "react";

import Container from "../Container";

export type CustomPropsWithChildren = PropsWithChildren & {
  bg?: string;
};

// TODO: change default colors
const Section = ({ children, ...props }: CustomPropsWithChildren) => {
  const { bg, ...rest } = props;
  return (
    <section
      className={`w-full h-full overflow-x-hidden dark:bg-black ${
        bg ? bg : "bg-secondary-orange"
      }`}
      {...rest}
    >
      <div className="h-screen w-screen">
        <div className="w-full h-full flex items-center justify-center">
          <Container>{children}</Container>
        </div>
      </div>
    </section>
  );
};

export default Section;
