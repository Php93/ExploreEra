function Dropdown({children}) {
  return (
    <div className="absolute top-12 -left-28">
        <div className="block text-left bg-white text-black w-[150px] rounded-lg">
            {children}
        </div>
    </div>
  )
}

export default Dropdown