import App, { AppProps, AppContext } from "next/app";
import { useState } from 'react'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Navigation } from "../components/Navigation";
import { Barra_Deportes } from "../components/Barra_deportes";
import deportes from '../apis/deportes.json'

function Myapp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true)
  const [navBar,setNavBar] = useState<boolean>(false)

  pageProps={...pageProps,setLoading,navBar,setNavBar}
  
  return <>
        <Head>
      <title>Apuestan web</title>
      <link rel="stylesheet" href="/css/index.css" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="theme-color" content="rgb(10,10,10)" />
      <meta name="description" content="Desarrollo de aplicaciones web, moviles y soluciones tecnologiocas adaptadas a la necesidad del cliente. 
      Con Diaz Web App, puedes extender tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión."/>
      <meta name="keywords" content="diaz web app, desarrollo web, desarrollo de aplicaciones moviles, desarrollo de e-commerce, desarrollo tiendas online" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
      <meta name="author" content="diaz web app" />
    </Head>
    <Header {...pageProps} />
    <Barra_Deportes data={deportes}/>

    <Navigation {...pageProps}/>

    <Component {...pageProps}/>
    <div className="bg"></div>
    {
      loading ? (
        <div className="loader" >
          <img width="44px" src="/icons_svg/sync-outline.svg" alt="" />
        </div>
      ) : null
    }
    <Footer {...pageProps}/>
        </>
}

Myapp.getStaticProps = async (ctx: AppContext) => {
  const appProps = await App.getInitialProps(ctx)

  return {appProps}
}

export default Myapp