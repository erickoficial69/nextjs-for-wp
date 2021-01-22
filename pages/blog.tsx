import { GetStaticProps, GetStaticPropsContext } from 'next'
import { useEffect } from 'react'
import { Aside } from '../components/Aside'
import { Tarjeta_Post } from '../components/tarjeta_post'
import Link from 'next/link'
import { IPost } from '../interfaces/app.interfaces'

const BlogPage = ({setLoading,posts}:any) => {
    useEffect(()=>{
        setLoading(false)
    },[])
    return <main>
        <article>
        <div className="flex-nowrap slide">
                    {
                        posts ? posts.map((post:IPost)=>(
                            <Link key={post.id} href={`/post/${post.slug}`}>
                                <a onClick={()=>setLoading(true)} >
                                    <img src={post.thumbnail} />
                                    <h2>{post.title}</h2>
                                </a>
                            </Link>
                        )):(
                            <>
                                <Link href={`#`}>
                                    <a onClick={()=>setLoading(true)} >
                                        <img src="/logo.png" />
                                        <h2>no data set</h2>
                                    </a>
                                </Link>
                                <Link href={`#`}>
                                    <a onClick={()=>setLoading(true)} >
                                        <img src="/logo.png" />
                                        <h2>no data set</h2>
                                    </a>
                                </Link>
                                <Link href={`#`}>
                                    <a onClick={()=>setLoading(true)} >
                                        <img src="/logo.png" />
                                        <h2>no data set</h2>
                                    </a>
                                </Link>
                            </>
                        )
                    }
                </div>

            <div className="container">
                <Tarjeta_Post setLoading={setLoading} postType="post" posts={posts} />
            </div>
        </article>
        <Aside setLoading={setLoading}  />
      </main>
    }

export const getStaticProps:GetStaticProps=async(_:GetStaticPropsContext)=>{
    const posts = require('../apis/posts.json')
    return {props:{posts},revalidate:1}
} 
export default BlogPage
