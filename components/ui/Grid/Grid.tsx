import { FC, ReactNode } from "react"
import s from "./Grid.module.css"


const Grid: FC<ReactNode> = ({children}: any) => {

    return (
        <div className={s.root}>
            {children}
        </div>
    )
}

export default Grid