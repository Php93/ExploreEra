function Select({placeHolder, isOpen, setIsOpen, selected, setSelected, children}) {
  return (
    <div className="relative">
        <div 
            onClick={(e) => {
                if(setIsOpen) {
                    setIsOpen(!isOpen)
                }
            }} 
            className={`flex justify-between items-center text-lg px-8 py-3 bg-white ${isOpen ? "rounded-tl-2xl rounded-tr-2xl" : "rounded-2xl"} cursor-pointer `}
        >
            {selected ? selected : placeHolder}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </div>

        <div className="absolute left-0 w-full shadow-lg bg-white px-8 z-10" style={{ display: isOpen ? "block" : "none" }} >
            {children}
        </div>
    </div>
  )
}

export default Select