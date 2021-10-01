import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'

type Data = {
    genres: string[]
}

export const getStaticPaths: GetStaticPaths = async() => {
    const res = await fetch('http://localhost:3000/api/movies')
    const data: Array<Data> = await res.json()
    const paths = data.map(movie => ({ params: {keyWord: movie.genres[0]}}))
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps: GetStaticProps = async() => {
    return {
        props:{
        }
    }
}

export default function test(){
    const router = useRouter()
    const { keyWord } = router.query
    return(
        <h1>{keyWord}</h1>
    );
}