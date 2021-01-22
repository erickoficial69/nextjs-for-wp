import Link from 'next/link'
import { IPronostico } from '../interfaces/app.interfaces'

type IProps={
    setLoading:any
    pronostico:IPronostico
}

export const Tarjeta_Pronosticos = ({pronostico,setLoading}:IProps) => {
    
   
    return (
        <>
            <div className="flex-nowrap slide-item">
                <div className="flex-wrap">
                    <img src="/img/equipos.webp" />
                    <small> {pronostico.equipo1} </small>
                </div>

                <div className="flex-wrap">
                    <b>VS</b>
                    <p>
                        {pronostico.fecha} <br/>
                        {pronostico.hora}
                    </p>
                </div>

                <div className="flex-wrap">
                    <img src="/img/equipos.webp" />
                    <small>{pronostico.equipo2}</small>
                </div>

                <Link href={`/pronostico/${pronostico.slug}`} ><button onClick={()=>setLoading(true)} className="btn-primary" >Ver Pronostico</button></Link>
            </div>              
        </>
    )
}