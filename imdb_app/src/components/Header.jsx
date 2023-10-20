import MenuItem from "./MenuItem";
import { LuHome } from "react-icons/lu";
import { FaInfo } from "react-icons/fa6";

export default function Header() {
  return (
    <div>
      <div className="flex my-6">
        <MenuItem title="Home" address="/" ICon={LuHome} />
        <MenuItem title="About" address="/about" ICon={FaInfo} />
      </div>
      <div></div>
    </div>
  );
}
