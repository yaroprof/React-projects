import React, {useState, useContext} from "react";

const AppContext = React.createContext()


const AppProvider = ({children}) =>{
  const [isSidebarOpen, setIsSidebarOpen] = useState(false) 
  
   const openSidebar = () =>{
    setIsSidebarOpen(true)
   }
   const closeSideBar = () =>{
    setIsSidebarOpen(false)
   }

  return(
    <AppContext.Provider>
      value={{
        isSidebarOpen,
        openSidebar,
        closeSideBar

      }}
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () =>{
  return useContext(AppContext)
}
export {AppContext, AppProvider}