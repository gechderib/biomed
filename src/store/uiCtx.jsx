import { createContext, useState } from "react";

export const UiContext = createContext({})


const UiContextProvider = ({children}) => {
    var [showProfile, setShowProfile] = useState(false)
    var [isAddingDoc, setIsAddingDoc] = useState(false)
    var [action, setAction] = useState("start")
    const toggleProfile = () => {
        showProfile = !showProfile
        setShowProfile(showProfile)
    }

    const onStart = () => {
        setAction("start");
    }
    const onReset = () => {
        setAction("reset")
    }
    const onStop = () => {
        setAction("stop")
    }

    const store = {
        showProfile,
        toggleProfile,
        isAddingDoc,
        setIsAddingDoc,
        action, setAction,
        onStart, onReset, onStop
    }

    

    return <UiContext.Provider value={store}>
        {children}
    </UiContext.Provider>
}


export default UiContextProvider

