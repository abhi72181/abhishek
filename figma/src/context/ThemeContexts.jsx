import { createContext, useState } from "react";

export const ThemeContexts=createContext()

export const ThemeContextProvider=({children})=>{
    const [theme,setTheme]=useState("light")
    return <ThemeContexts.Provider value={{theme,setTheme}}>{children}</ThemeContexts.Provider>
}