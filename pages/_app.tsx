import "@assets/main.css"
import { AppProps } from "next/app"
import { FC } from "react"

const Noop: FC = ({children}: any) => <>{children}</>

function MyApp({Component, pageProps}: AppProps & {Component: {Layout: FC} }) {

    const Layout: any = Component.Layout ?? Noop
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
}

export default MyApp