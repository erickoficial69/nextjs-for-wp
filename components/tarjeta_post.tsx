import Link from 'next/link'
import { IPost } from '../interfaces/app.interfaces'
import { Arrow_circle } from './icons'

type IProps={
    posts:IPost[] 
    postType:string
}
export const Tarjeta_Post = ({posts,postType}:IProps) => {
    
    return <>
    {
       posts? posts.map((post:IPost)=>(
                    <div key={post.id} className="flex-nowrap tarjeta-post">
                        <div>
                            <img src={post.thumbnail} />
                        </div>
                        <div >
                            <b>{post.title}</b>
                            <p>
                                {post.content}
                            </p>
                        </div>

                        <Link href={`/${postType}/${post.slug}`}>
                            <button className="btn-secondary" > <Arrow_circle /> </button>
                        </Link>
                    </div>
                ))
        :null
    }
    </>
}