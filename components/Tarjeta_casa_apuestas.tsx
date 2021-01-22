import { ICasaApuesta } from "../interfaces/app.interfaces"

type IProps={
    casas:ICasaApuesta[]
}
export const Tarjeta_casas_apuestas = ({casas}:IProps) => {
    
    return (
        <>
        {
            casas.length > 0?(
                casas.map((casa:ICasaApuesta)=>(
                    <div key={casa.id} className="flex-wrap tarjeta-casa-apuesta">
                        <div className="flex-wrap" title={casa.promo} >
                            <img src="/img/futbol1.webp" />
                        </div>

                        <div className="flex-wrap">
                            <div><img src={casa.icono} /></div>
                            <small>{casa.rank}</small>
                        </div>

                        <button className="btn-primary" >Ver Pronostico</button>
                    </div>
                ))
            ):null
        }
        </>
    )
}