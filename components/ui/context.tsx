import { 
    createContext, 
    FC, 
    useContext, 
    useReducer,
    useMemo, 
    ReactNode} from "react"

export interface StateModifiers {
    openSidebar: () => void
    closeSidebar: () => void
}

export interface StateValues {
    isSidebarOpen: boolean
}

const stateModifiers = {
    openSidebar: () => {},
    closeSidebar: () => {}
}

const initialState = { isSidebarOpen: false }

type State = StateValues & StateModifiers

const UIContext = createContext<State>({
    ...stateModifiers,
    ...initialState
})


type Action = { type: "OPEN_SIDEBAR" | "CLOSE_SIDEBAR" } 

function uiReducer(state: StateValues, action: Action){
    switch(action.type) {
        case "OPEN_SIDEBAR" : {
            return {
                ...state,
                isSidebarOpen: true 
            }
        }
        case "CLOSE_SIDEBAR": {
            return {
                ...state,
                isSidebarOpen: false 
            }
        }
    }
}

interface Props  {
    children: ReactNode | ReactNode[]
}

export const UIProvider: FC<Props> = ({children}: Props) => {
    
    const [ state, dispatch ] = useReducer(uiReducer, initialState)

    const openSidebar = () => dispatch({ type: "OPEN_SIDEBAR" })
    const closeSidebar = () => dispatch({ type: "CLOSE_SIDEBAR" })

    const value = useMemo(() => {
        
        return {
            ...state, // contains also >>> isSidebarOpen: state.isSidebarOpen
            openSidebar,
            closeSidebar
        }
    }, [state])

    return (
        <>
        <UIContext.Provider value={value}>
            {children}
        </UIContext.Provider>
        </>
    )
}

export const useUI = () => {
    const context = useContext(UIContext)
    return context
}


