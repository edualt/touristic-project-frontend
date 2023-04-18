// import svg file
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Thumbnail from "../../assets/svg/thumbnail.svg";
import SearchSvg from "../../assets/svg/searchIcon.svg";
import AvatarSvg from "../../assets/svg/avatar.svg";

function NavBar() {
  return (
    <div className="flex w-full h-14 px-8 justify-between bg-white items-center shadow-sm">
      <img src={Thumbnail} className="to-gray-500" />
      <a href="#" className="text-base text-black">
        Destinos
      </a>
      <a href="#" className="text-base text-black">
        Actividades
      </a>
      <a href="#" className="text-base text-black">
        Viajes
      </a>

      <form className="w-1/2 h-2/3 flex items-center" onSubmit={null}>
        <button className="absolute pl-3" type="submit">
          <img src={SearchSvg} className="to-gray-500" />
        </button>
        <input
          type="text"
          className="w-full h-full bg-slate-100 rounded-full px-10 text-sm"
          id="searchInput"
          defaultValue={""}
        />
      </form>
      <div className="flex justify-center items-center gap-20">
        <Menu as="div">
          <Menu.Button className="w-full h-8 flex items-center">
            <img src={AvatarSvg} className="w-full h-full" draggable={false} />
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  <Link
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    Mis direcciones
                  </Link>
                  <Link
                    className="text-red-500 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    Cerrar sesión
                  </Link>
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}

export default NavBar;
