import { Check } from "@components/icons"
import { FC } from "react"
import s from "./Swatch.module.css"



interface Props {
    label?: string // as Label for now
    color?: string // as color for now
    variant?: "size" | "color" | string
    onClick: () => void
}

const Swatch: FC<Props> = ({
    color, label, variant, ...rest
    }) => {

    label = label?.toString().toLowerCase()
    variant = variant?.toLocaleLowerCase()


    return (
        <>
        <button 
            style={color ? {backgroundColor: color} : {}}
            className={s.root}
            {...rest}
        >
            {/* <span>
                <Check />
            </span> */}
            {variant === "size" ? label : null}

        </button> 
        </>
        
    )
}


export default Swatch

