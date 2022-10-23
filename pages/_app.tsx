import "@assets/main.css"
import { AppProps } from "next/app"
import { FC, ReactNode } from "react"
import { UIProvider } from "@components/ui/context"


interface Props {
  children: ReactNode | ReactNode[]
}

const Noop: FC<Props> = ({children}: Props) => <>{children}</>

function MyApp({Component, pageProps}: AppProps & {Component: {Layout: FC}}) {
  const Layout: any = Component.Layout ?? Noop

  return (
    <UIProvider >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  )
}

export default MyApp