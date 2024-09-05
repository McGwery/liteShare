import { InformationCircleIcon } from '@heroicons/react/24/outline'

export default function ErrorPage() {
  return (
    <div className="h-screen w-screen flex flex-col items-center electric-shock  bg-slate-600 justify-center   relative ">
      <div className="mb-14 border-b-2 pb-3">
        <p className="text-slate-600 text-5xl"><b>Oops!</b></p>
      </div>
      <div className="grid md:grid-cols-1 grid-cols-1 md:gap-10 gap-6">
        <div className="md:px-20 px-16 cursor-pointer  border border-slate-500 md:py-6 py-4  rounded-xl flex flex-col items-center">
          <InformationCircleIcon className="h-24 w-24 mt-4 text-slate-600" />
          <p className="text-2xl font-semibold mt-14 text-slate-600">Sorry! unexpected error has occurred</p>
          <p className="text-sm font-semibold mt-14 mb-4 text-slate-400">Not found</p>
        </div>
      </div>
      <div className="mt-14">
        <p className="text-slate-400 text-sm underline"><i><b>Powered By Vastlabs</b></i></p>
      </div>
    </div>
  )
}

