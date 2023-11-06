import {useState, useContext, createContext} from 'react'
import useFetch from './useFetch';

const AppContext = createContext()

const AppProvider = ({children}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [query, setQuery] = useState("")
 
    const {isLoading, data, isError}=useFetch(query)

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    const searchRecipe = (input) => {
        setQuery(input)
    }



    return <AppContext.Provider value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        query,
        isLoading,
        data,
        isError,
        searchRecipe,
    }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext};