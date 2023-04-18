import { Link, NavLink } from "react-router-dom";
import HomeSvg from "../../assets/svg/home.svg";
import BusSvg from "../../assets/svg/bus.svg";
import LocationSvg from "../../assets/svg/location.svg";

const AdminSideBar = () => {
  const activeClassName = "flex gap-2 text-principal-purple text-base";
  const normalClassName = "flex gap-2 text-gray-900 text-base";

  return (
    <div className="w-1/5 pl-8 pt-5 flex flex-col gap-4 bg-slate-50">
      <h2>Panel de control</h2>
      <ul className="flex flex-col gap-4">
        <div className="flex gap-2 text-gray-900 text-base">
          <img src={HomeSvg} className="w-4" />
          <li>Home</li>
        </div>
        <div className="flex gap-2 text-gray-900 text-base">
          <img src={BusSvg} className="w-4" />
          <li>Productos</li>
        </div>
        <div className="flex gap-2 text-gray-900 text-base">
          <img src={LocationSvg} className="w-4" />
          <li>Ordenes</li>
        </div>
      </ul>
    </div>
  );
};

export default AdminSideBar;
