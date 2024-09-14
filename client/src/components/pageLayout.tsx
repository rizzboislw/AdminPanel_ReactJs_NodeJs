import React from "react";

interface layoutProps {
  children: React.ReactNode;
  innerDivCustomStyle?: string;
}

const PageLayout: React.FC<layoutProps> = ({
  children,
  innerDivCustomStyle = "",
}) => {
  return (
    <div
      className={`h-full w-full max-w-[1200px] max-[1200px]:px-4 ${innerDivCustomStyle}`}
    >
      {children}
    </div>
  );
};

export default PageLayout;
