import { Product } from "@common/types/product";

type AvailableChoices = "size" | "color" | string

export type Choices = {
    [P in AvailableChoices]: string
}

export const getVariant = ( product: Product, choices: Choices) => 
    product.variants.find(variant => 
     variant.options.every(variantOption => {
        const optionName = variantOption.displayName.toLowerCase()
            return optionName in choices && 
                   choices[optionName] === variantOption.values[0].label
        })
    )
    