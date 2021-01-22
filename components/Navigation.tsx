import {} from './icons'
import Link from 'next/link'

export const Navigation = ({setNavBar,navBar,setLoading}:any) => {
    return (
        <>
            <div onClick={()=>setNavBar(false)} className={`navigation-shadow ${navBar?'navigation-open':'navigation-close'}`} ></div>
            <nav onClick={()=>setNavBar(false)} className={`navigation-bar ${navBar?'navigation-open':'navigation-close'}`}>
                <Link href="/" ><button onClick={()=>document.location.pathname!=='/'?setLoading(true):null} >home</button></Link>
                <Link href="/e-sports" ><button onClick={()=>document.location.pathname!=='/e-sports'?setLoading(true):null} >e-sports</button></Link>
                <Link href="/blog" ><button onClick={()=>document.location.pathname!=='/blog'?setLoading(true):null} >blog</button></Link>
                <Link href="/pronosticos" ><button onClick={()=>document.location.pathname!=='/pronosticos'?setLoading(true):null} >parley</button></Link>
                <Link href="/contacto" ><button onClick={()=>document.location.pathname!=='/contacto'?setLoading(true):null} >contacto</button></Link>
            </nav>                   
        </>
    )
}