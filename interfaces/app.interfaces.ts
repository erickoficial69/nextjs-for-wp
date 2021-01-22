export interface IAnuncio{
    id?:any
    icono:string
}

export interface IDeporte{
    id?:any
    icono:string
    nombre:string
}

export interface IPronostico{
    id?:any
    equipo1:string
    equipo2:string
    fecha:string
    hora:string
    deporte:string
    title:string
    content:string
    thumbnail?:string
    slug:string
}

export interface ICasaApuesta{
    id?:any
    nombre:string
    icono:string
    rank:number
    promo:string
}

export interface IPost{
    id?:any
    title:string
    content:string
    thumbnail?:string
    slug:string
}