import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { useEffect } from 'react'
import { Aside } from '../../components/Aside'
import { IPronostico } from '../../interfaces/app.interfaces'

type IProps={
    setLoading:any
    pronostico:IPronostico
}

const IndexPage = ({setLoading,pronostico}:IProps) => {
    
    useEffect(()=>{
        setLoading(false)
    },[])


    return <main>
        <article>
            <div className="post-body container" >
                <img src={pronostico.thumbnail} />
                <h1>{pronostico.title}</h1>
                <p>
                    {pronostico.content}
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eius animi aperiam, modi dolores quas cum omnis optio, quis sint doloribus assumenda repudiandae et culpa numquam nisi praesentium maiores eos fuga! Sit sequi quaerat error reiciendis vel? Debitis, ipsam! Laborum eligendi asperiores quisquam quibusdam corrupti, dolorem dignissimos totam rem molestiae nostrum, blanditiis voluptatibus veniam est commodi cumque? Quo commodi provident ducimus quis quasi deserunt eius a reprehenderit facere dolor dignissimos id ea nihil modi esse vitae similique, quos nisi perspiciatis sunt? Blanditiis nobis amet pariatur veritatis eaque voluptates, cumque qui.
                </p>
            </div>
        </article>
        <Aside />
      </main>
    }

export const getServerSideProps:GetServerSideProps=async(context:GetServerSidePropsContext)=>{
    const {query} = context
    const pronosticos = require('../../apis/pronosticos.json')
    const pronostico = await pronosticos.find((pronostico:IPronostico)=>pronostico.slug==query.slug)
    return {props:{pronostico}}
} 
export default IndexPage
