import Link from "next/link";

const RightSidedMenu = ({ children }) => {
  return (
    <div className="hidden md:flex justify-end items-baseline">
      <div>
        <Link className="text-white font-medium mr-4" href="https://explorer.etherlink.com/">
          Explorer
        </Link>
      </div>
      <div>
        <Link className="text-white font-medium mr-4" href="https://bridge.etherlink.com/">
          Bridge
        </Link>
      </div>
      {children}
    </div>
  );
};

export default RightSidedMenu;
