import { useEffect } from "react";


const Header = () => {
    useEffect(() => {
      document.title = "React Todo App"
    }, [])
    
    return (
        <div style={{height:"50px"}} className="bg-black text-white text-3xl flex items-center justify-center">
            Header
        </div>
    );
};

export default Header;