import type { InferGetStaticPropsType } from "next"
import getAllProducts from "@framework/product/get-all-products"
import { getConfig } from "@framework/api/config"
import { Layout } from "@components/common"
import { ProductCard } from "@components/common/product"
import { Grid, Hero } from "@components/ui"


export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllProducts(config)

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }

}
export default function Home({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <Grid layout="A">
        {products.slice(0,3).map(product =>
          <ProductCard 
          key={product.id}
          product={product} 
          />
        )}
      </Grid>
      <Hero 
        headline="Cookies, ice cream and muffin"
        description="Caramels pastry cookie jelly tootsie roll. Powder lollipop soufflé fruitcake chupa chups pastry. Marzipan shortbread jelly-o liquorice tart cotton candy tootsie roll oat cake icing. Chocolate bar marshmallow ice cream jujubes marzipan lemon drops biscuit. Pastry candy canes marshmallow chocolate bar muffin tiramisu bonbon icing. Cotton candy fruitcake dessert croissant danish powder macaroon lollipop wafer. Halvah fruitcake liquorice jelly-o pie sesame snaps. Oat cake chocolate pudding candy croissant sweet."
      />
    </>
  )
}

Home.Layout = Layout

