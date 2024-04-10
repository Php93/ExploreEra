const TabNavItem = ({ id, title, activeTab, setActiveTab, disabled, resetId }) => {
    const handleClick = () => {
        resetId()
        if (!disabled) {
            setActiveTab(id);
        }
    };
 
    return (
        <li 
            onClick={() => handleClick()} 
            className={`px-4 py-2 list-none text-center cursor-pointer rounded-2xl tracking-wide transition-all duration-200 ease-in-out ${activeTab === id ? "bg-main text-white" : ""}`}
        >
            { title }
        </li>
    );
};

export default TabNavItem;