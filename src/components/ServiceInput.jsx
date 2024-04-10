import {forwardRef} from 'react'

function ServiceInput({title, text, icon, onClick, onChange}, ref) {
  return (
    <div onClick={onClick} onChange={onChange} className="flex-1 flex items-center justify-between p-3 bg-white border-main border-2 rounded-2xl cursor-pointer">
        <div className="flex items-center">
            <span className="text-sm text-[#252525]/80">{text}</span>
            <span className="ml-2.5 mr-2">{title}</span>
            {icon && (
                <svg className="w-6 h-6 p-0.5 rounded-md bg-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    {icon}
                </svg>
            )}
        </div>

        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </div>
    </div>
  )
}

export default forwardRef(ServiceInput)