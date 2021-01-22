import { IDeporte } from "../interfaces/app.interfaces"

interface IProps{
    data:IDeporte[]
}

export const Barra_Deportes = ({data}:IProps) => {
    return (
        <ul className="flex-wrap barra-deportes" >
            {
                data.map((item:IDeporte)=>(
                    
                    <a key={item.id} href="#">
                        <img src={item.icono} alt={item.nombre}/>
                        <p>{item.nombre}</p>
                    </a>
                ))
            }
        </ul>
        
    )
}