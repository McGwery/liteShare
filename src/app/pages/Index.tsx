import { CloudArrowDownIcon, FolderIcon, WifiIcon, Cog6ToothIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="h-screen w-screen flex flex-col items-center electric-shock  bg-indigo-600 justify-center   relative ">
      <div className="mb-14 border-b-2 pb-3">
        <p className="text-indigo-900 text-2xl"><b>LiTESHARE</b></p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-6">
        <Link to={'/connections'} className="md:px-20 px-16 cursor-pointer hover:bg-indigo-100 border border-indigo-500 md:py-6 py-4 bg-indigo-50 rounded-xl shadow-lg flex flex-col items-center">
          <WifiIcon className="h-12 w-12 text-indigo-600" />
          <p className="text-xl font-semibold text-indigo-700">Connections</p>
          {/* <p className="text-sm font-semibold text-indigo-700">12</p> */}
        </Link>
        <Link to={'/downloads'} className="md:px-20 px-16 cursor-pointer hover:bg-indigo-100 border border-indigo-500 md:py-6 py-4 bg-indigo-50 rounded-xl shadow-lg flex flex-col items-center">
          <CloudArrowDownIcon className="h-12 w-12 text-indigo-600" />
          <p className="text-xl font-semibold text-indigo-700">Downloads</p>
        </Link>
        <Link to={'/shared-files'} className="md:px-20 px-16 cursor-pointer hover:bg-indigo-100 border border-indigo-500 md:py-6 py-4 bg-indigo-50 rounded-xl shadow-lg flex flex-col items-center">
          <FolderIcon className="h-12 w-12 text-indigo-600" />
          <p className="text-xl font-semibold text-indigo-700">Shared Files</p>
        </Link>
        <Link to={'/settings'} className="md:px-20 px-16 cursor-pointer hover:bg-indigo-100 border border-indigo-500 md:py-6 py-4 bg-indigo-50 rounded-xl shadow-lg flex flex-col items-center">
          <Cog6ToothIcon className="h-12 w-12 text-indigo-600" />
          <p className="text-xl font-semibold text-indigo-700">Settings</p>
        </Link>
      </div>
      <div className="mt-14">
        <p className="text-slate-400 text-sm underline"><i><b>Powered By Vastlabs</b></i></p>
      </div>
    </div>
  )
}
