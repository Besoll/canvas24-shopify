import { FC, ReactNode } from "react"
import s from "./Button.module.css"

interface Props {
    children: ReactNode | ReactNode[]
    onClick: () => void
}
const Button: FC<Props> = ({children, onClick}) => {

    return (
        <button 
            type="button" 
            className={s.root}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button