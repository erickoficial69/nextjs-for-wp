import { GetStaticProps, GetStaticPropsContext } from 'next'
import { useEffect } from 'react'
import Link from 'next/link'
import { Ad } from '../components/Ad'
import { Aside } from '../components/Aside'
import { Slide_Pronosticos } from '../components/Slide_pronosticos'
import { Tarjeta_casas_apuestas } from '../components/Tarjeta_casa_apuestas'
import posts from '../apis/posts.json' 
import { IPost } from '../interfaces/app.interfaces'

const IndexPage = ({setLoading,data_deporte,casas_apuestas}:any) => {
    useEffect(()=>{
        setLoading(false)
    },[])
    return <main>
            <article>
                <div className="flex-nowrap slide">
                    {
                        posts ? posts.map((post:IPost)=>(
                            <Link href={`/post/${post.slug}`}>
                                <a>
                                    <img src={post.thumbnail} />
                                    <h2>{post.title}</h2>
                                </a>
                            </Link>
                        )):(
                            <>
                                <Link href={`#`}>
                                    <a>
                                        <img src="/logo.png" />
                                        <h2>no data set</h2>
                                    </a>
                                </Link>
                                <Link href={`#`}>
                                    <a>
                                        <img src="/logo.png" />
                                        <h2>no data set</h2>
                                    </a>
                                </Link>
                                <Link href={`#`}>
                                    <a>
                                        <img src="/logo.png" />
                                        <h2>no data set</h2>
                                    </a>
                                </Link>
                            </>
                        )
                    }
                </div>

                <h2 style={{color:'var(--primary-color)',textAlign:'center',margin:'10px auto'}} >Pronósticos AW</h2>

                <Slide_Pronosticos categoria="MLB" delay={2} pronosticos={data_deporte} />

                <h2 style={{color:'var(--primary-color)',textAlign:'center',margin:'10px auto'}} >Casas de apuestas</h2> 
                
                <Ad />
                
                <div className="flex-wrap">
                    <Tarjeta_casas_apuestas casas={casas_apuestas} />
                </div>
            </article>

            <Aside />
      </main>
    }

export const getStaticProps:GetStaticProps=async(_:GetStaticPropsContext)=>{
    const data_deporte = require('../apis/pronosticos.json')
    const casas_apuestas = require('../apis/casas_apuestas.json')
    return {props:{data_deporte,casas_apuestas},revalidate:1}
} 
export default IndexPage
