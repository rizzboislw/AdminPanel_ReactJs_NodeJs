import { adminFontGradient } from "../styles/theme";
import { default as logoutIcon } from "../assets/svg/logout.svg";

function Navbar() {
  return (
    <nav className="h-[60px] w-full flex justify-center  bg-white">
      <div className="w-full max-w-[1200px]  flex justify-between items-center max-[1200px]:px-4">
        <div
          className="font-Montserrat text-sm font-bold text-white"
          style={adminFontGradient}
        >
          ADMIN DASHBOARD
        </div>
        <button className="font-Montserrat text-sm font-semibold text-black flex gap-2">
          <img src={logoutIcon} alt="logout-icon" />
          <p>Logout</p>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
