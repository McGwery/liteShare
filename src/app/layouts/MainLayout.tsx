import { ArrowUturnLeftIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

type TProp = {
    children?: any,
    title: string
}
export default function MainLayout({ children, title }: TProp) {
    return (
        <div className="electric-shock min-h-screen py-10">
            <div className='lg:w-1/2 md:w-3/4 w-full mx-auto px-4 relative'>
                <div className="lg:w-1/2 md:w-3/4 w-full mx-auto md:px-0 pt-5 bg-indigo-50 mb-8 flex items-center justify-between border-b-2 rounded-b-xl shadow-md  pb-3 fixed top-0 right-4 left-4">
                    <Link to='/'>
                        <ArrowUturnLeftIcon className="h-8 w-8top-1 ml-3 cursor-pointer text-indigo-900 " />
                    </Link>
                    <p className="text-indigo-900 text-2xl mr-4"><b>{title}</b></p>
                    <p className="lg:block md:hidden hidden"></p>
                </div>
            </div>
            <div className="flex flex-col items-center mt-10">
                <div className='lg:w-1/2 md:w-3/4 w-full mx-auto md:px-0 px-4'>

                    <div className="">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}