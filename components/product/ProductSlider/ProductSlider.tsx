import React, { FC, ReactNode, Children, isValidElement, useState } from "react"
import s from "./ProductSlider.module.css"
import { useKeenSlider } from "keen-slider/react"
import cn from "classnames"

interface Props {
    children: ReactNode | ReactNode[]
}
const ProductSlider: FC<Props> = ({children}) => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        loop: true,
        slideChanged(s) {
            
        },
    })

    return (
        <div className={s.root}>
            <div ref={sliderRef} className="keen-slider transition-opacity">
                <button 
                    onClick={(e) => instanceRef.current?.prev()}
                    className={cn(s.leftControl, s.control)}
                />
                <button 
                onClick={(e) => instanceRef.current?.next()}
                className={cn(s.rightControl, s.control)}
                />
                { Children.map(children, child => {

                    if (isValidElement(child)) {

                        return {
                            ...child,
                            props: {
                                ...child.props,
                                className: `${child.props.className ? `${child.props.className}` : ""} keen-slider__slide`
                            }
                        }


                        // return React.cloneElement(child, {
                        //     className: `${child.props.className ? `${child.props.className}` : ""} keen-slider__slide`
                        // })
                    }

                    return child
                } )}
            </div>
            
        </div>
    )
}

export default ProductSlider