import { IPronostico } from "../interfaces/app.interfaces"
import { Tarjeta_Pronosticos } from "./tarjeta_pronostico"

type IProps={
    categoria:string
    delay?:number
    pronosticos:IPronostico[]
    setLoading:any
}
export const Slide_Pronosticos = ({categoria,delay,pronosticos,setLoading}:IProps) => {
    return (
        <>
        <div className="container">
            <div className="flex-nowrap titulo-pronosticos "><h3>Pronosticos {categoria}</h3><div></div></div>
        </div>
        
            <div className="flex-nowrap slide-pronosticos">
                {
                    pronosticos && pronosticos.length > 0 ?(
                        pronosticos.map((p:IPronostico)=><Tarjeta_Pronosticos key={p.id} setLoading={setLoading} pronostico={p}/>)
                    ):<h1>Err</h1>
                }
            </div>

            <style>
                {
                    `.slide-pronosticos .slide-item:first-child{
                        animation-delay:${delay?delay:3}s ;
                    }`
                }
            </style>
        </>
    )
}