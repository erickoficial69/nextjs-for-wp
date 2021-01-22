import {Icon_Menu,Login} from './icons'
import Link from 'next/link'

export const Header = ({setNavBar,setLoading}:any) => {
    
    return (
        <header className="flex-nowrap">
            <nav className="flex-nowrap">
                <Link href="/e-sports" ><button onClick={()=>document.location.pathname!=='/e-sports'?setLoading(true):null} className="efecto-test">e-sports</button></Link>
                <Link href="/blog" ><button onClick={()=>document.location.pathname!=='/blog'?setLoading(true):null} >blog</button></Link>
                <Link href="/" ><button onClick={()=>document.location.pathname!=='/'?setLoading(true):null} className="logo efecto-gradient efecto-border" >Apuestan</button></Link>
                <Link href="/pronosticos" ><button onClick={()=>document.location.pathname!=='/pronosticos'?setLoading(true):null}  className="efecto-test">parley</button></Link>
                <Link href="/contacto" ><button onClick={()=>document.location.pathname!=='/contacto'?setLoading(true):null} >contacto</button></Link>
                
            </nav>

            <div className="flex-nowrap">
                <button onClick={()=>setNavBar(true)} className="icon-button"><Icon_Menu/> <b>menu</b></button>
                <Link href="/" ><button onClick={()=>document.location.pathname!=='/'?setLoading(true):null} className="logo efecto-gradient efecto-border" >Apuestan</button></Link>
                <Link href="/blog" ><button onClick={()=>document.location.pathname!=='/blog'?setLoading(true):null} className="icon-button" ><Login/> <b>search</b></button></Link>
            </div>
                               
        </header>        
    )
}