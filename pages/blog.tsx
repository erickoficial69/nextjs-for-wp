import { GetStaticProps, GetStaticPropsContext } from 'next'
import { useEffect } from 'react'
import { Aside } from '../components/Aside'
import { Tarjeta_Post } from '../components/tarjeta_post'
import Link from 'next/link'

const BlogPage = ({setLoading,posts}:any) => {
    useEffect(()=>{
        setLoading(false)
    },[])
    return <main>
        <article>
            <div className="flex-nowrap slide">
                    <Link href="#">
                        <a>
                            <img src="/img/cristiano.webp" />
                            <h2>Cristiano notice</h2>
                        </a>
                    </Link>
            </div>

            <div className="container">
                <Tarjeta_Post postType="post" posts={posts} />
            </div>
        </article>
        <Aside />
      </main>
    }

export const getStaticProps:GetStaticProps=async(_:GetStaticPropsContext)=>{
    const posts = require('../apis/posts.json')
    return {props:{posts},revalidate:1}
} 
export default BlogPage
