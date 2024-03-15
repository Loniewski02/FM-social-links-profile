import { ReactNode } from "react";

const Link: React.FC<{ children: ReactNode; href: string }> = ({
  children,
  href,
}) => {
  return (
    <a
      href={href}
      className="transform rounded-md bg-grey1  px-4 py-3 text-center text-sm font-bold text-white1 transition duration-200 hover:bg-green1 hover:text-offBlack1 active:scale-105"
    >
      {children}
    </a>
  );
};

export default Link;
