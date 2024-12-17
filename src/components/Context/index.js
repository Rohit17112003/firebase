import { createContext, useState } from "react";
import Education from "../HomePage/Home";
export const DashboardScreenContext = createContext(null);

const ScreenProvider = ({ children }) => {
    const [currentScreen, setCurrentScreen] = useState(<Education />);
    return (
        <DashboardScreenContext.Provider value={{ currentScreen, setCurrentScreen }}>
            {children}
        </DashboardScreenContext.Provider>
    );
};

export default ScreenProvider;
