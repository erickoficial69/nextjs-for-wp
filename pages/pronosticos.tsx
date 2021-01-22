import { GetStaticProps, GetStaticPropsContext } from 'next'
import { useEffect } from 'react'
import { Ad } from '../components/Ad'
import { Aside } from '../components/Aside'
import { Tarjeta_Pronosticos } from '../components/tarjeta_pronostico'


const PronosticosPage = ({setLoading,pronosticos}:any) => {
    useEffect(()=>{
        setLoading(false)
    },[])
    return <main>
        <article>
            <Ad />
            <h2 style={{color:'var(--primary-color)',textAlign:'center',margin:'10px auto'}} >Pronósticos AW</h2>
            <div className="container flex-wrap">
                <button className="btn-secondary">parley mlb</button>
                <button className="btn-secondary">parley nfl</button>
                <button className="btn-secondary">parley nba</button>
            </div>
            <div className="flex-wrap ">
            {
                pronosticos.length > 0 ?(
                    pronosticos.map((pronostico:any,i:number)=><div key={i} style={{width:'300px'}} ><Tarjeta_Pronosticos setLoading={setLoading} pronostico={pronostico} /></div>)
                ):null
            }
            </div>
            <Ad />
        </article>

        <Aside setLoading={setLoading} />
      </main>
    }

export const getStaticProps:GetStaticProps=async(_:GetStaticPropsContext)=>{
    const pronosticos = require('../apis/pronosticos.json')
    return {props:{pronosticos},revalidate:1}
} 
export default PronosticosPage
