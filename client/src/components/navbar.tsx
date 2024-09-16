import { adminFontGradient } from "../styles/theme";
import NavbarDrawer from "./drawer";
import { default as logoutIcon } from "../assets/svg/logout.svg";

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
          <div className="sm:hidden">
            <NavbarDrawer />
          </div>
          <div className="hidden sm:block">
            <button className="flex gap-1">
              <img src={logoutIcon} alt="logout-icon" />
              <p className="text-[#055894]">Logout</p>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
