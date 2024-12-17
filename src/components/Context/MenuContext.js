import { createContext, useState } from "react";

export const MenuContext = createContext(null);

const MenuProvider = ({ children }) => {
    const [isMenu, setIsMenu] = useState(false);
    const handleMenuToggele = () => {
        setIsMenu(!isMenu);
    };
    return (
        <MenuContext.Provider value={{ isMenu, setIsMenu, handleMenuToggele }}>
            {children}
        </MenuContext.Provider>
    );
};

export default MenuProvider;
