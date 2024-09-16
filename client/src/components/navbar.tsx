import { adminFontGradient } from "../styles/theme";
import NavbarDrawer from "./drawer";

function Navbar() {
  return (
    <nav className="h-[60px] w-full flex justify-center  bg-white shadow-lg">
      <div className="w-full max-w-[1200px]  flex justify-between items-center max-[1200px]:px-4">
        <div
          className="font-Montserrat text-lg font-bold text-white"
          style={adminFontGradient}
        >
          ADMIN PANEL
        </div>
        <div className="font-Montserrat text-sm font-semibold text-black flex gap-2">
          <NavbarDrawer />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
