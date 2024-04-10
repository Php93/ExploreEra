
function Modal({title, setIsOpen, children}) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center px-5">
        <div className="fixed inset-0 bg-black/30" onClick={() => setIsOpen(false)} />

        <div className="max-w-3xl mx-auto z-50 max-h-[calc(100vh/1.5)] overflow-y-auto rounded-lg">
            <div className="bg-white shadow-lg px-5 py-4">
                {title && (
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-medium">{title}</h3>

                        <button onClick={() => setIsOpen(false)}>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                )}

                <div>
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal