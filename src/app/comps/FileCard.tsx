import { DocumentTextIcon,FolderOpenIcon} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export default function FileCard() {
    return (
        <div className='flex items-center justify-between gap-2 py-2 px-1 mt-1 border-b'>
            <div>
                <DocumentTextIcon className='h-9 w-9 text-slate-400' />
            </div>
            <div className='flex-1'>
                <p className='text-md font-bold text-slate-700'>Document X</p>
                <div className='flex items-center text-xs space-x-3 text-slate-500'>
                    <p><b>Size: </b><span>150KB</span></p>
                    <span>|</span>
                    <p><b>Type: </b><span>PDF</span></p>
                    <span>|</span>
                    <p><b>Date: </b><span>12-03-2024 16:30</span></p>
                </div>
            </div>
            <div>
                <Link to={'/'} title='Open File'>
                    <FolderOpenIcon className="h-8 w-8 border p-1 rounded-lg text-indigo-700 border-indigo-100 bg-indigo-100" />
                </Link>
            </div>
        </div>
    )
}
