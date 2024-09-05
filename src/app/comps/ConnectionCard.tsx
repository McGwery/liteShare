import {  ComputerDesktopIcon, ShareIcon, } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

export default function ConnectionCard() {
    return (
        <div className='flex items-center justify-center px-2 py-1 m-2 rounded-lg shadow-sm border border-indigo-200  gap-2'>
            <div className=''>
                <ComputerDesktopIcon className='h-20 w-20 text-slate-400' />
                {/* <DevicePhoneMobileIcon className='h-20 w-20 text-slate-400' /> */}
            </div>
            <div className='flex-1'>
                <Link to='/' className='text-xl uppercase font-semibold text-slate-800'>DESKTOP-234JH</Link>
                <h1 className='mt-1 text-md'>Window 10 Pro</h1>
            </div>
            <div>
                <Link to={'/'} title='Go to shared files'>
                    <ShareIcon className="h-12 w-12 border p-1 rounded-lg text-indigo-700 border-indigo-100 bg-indigo-100" />
                </Link>
            </div>
        </div>
    )
}
