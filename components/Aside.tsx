import { Tarjeta_Post } from "./tarjeta_post"
import data from '../apis/pronosticos.json'

interface IProps{
    setLoading:any
}

export const Aside = ({setLoading}:IProps) => {
    const pronosticos = data
    return (
        <>
            <div style={{width:'100%'}} >
                <h3>Ultimos pronosticos</h3>
                    <Tarjeta_Post setLoading={setLoading} postType="pronostico" posts={pronosticos} />
                <div>
                    <img src="/img/anuncios/BOL_NBA_KickOff_300x600.gif" />
                </div>
            </div>           
        </>
    )
}