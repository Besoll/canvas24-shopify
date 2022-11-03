import { Check } from "@components/icons"
import { FC } from "react"
import s from "./Swatch.module.css"
import cn from "classnames"
import { isDark } from "@lib/colors"



interface Props {
    label?: string // as Label for now
    color?: string // as color for now
    variant?: "size" | "color" | string
    active?: boolean
    onClick: () => void
}

const Swatch: FC<Props> = ({
    color, label, variant, active,
    ...rest
    }) => {

    label = label?.toString().toLowerCase()
    variant = variant?.toLocaleLowerCase()

    const rootClassName = cn (
        s.root, 
        { 
            [s.active]: active,
            [s.color]: color,
            [s.size]: variant === "size"
        }
    )


    return (
        <>
        <button 
            style={color ? {backgroundColor: color} : {}}
            className={rootClassName}
            {...rest}
        >
            { variant === "color" && active && 
                <span>
                    <Check />
                </span>
            }
            {variant === "size" ? label : null}

        </button> 
        </>
        
    )
}


export default Swatch

