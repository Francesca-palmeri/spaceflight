import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import { ArticlesT } from "../types/ArticlesT"
import ArticleDetails from "./ArticleDetails"

const Articles = function () {
    const [ articles, setArticles ] = useState<ArticlesT[]>([])

    const getArticles = async () => {
        try {
            const response = await fetch(
                'https://api.spaceflightnewsapi.net/v4/articles'
            )
            if (response.ok){
                const data = await response.json()
                setArticles(data.results)
            } else {
                throw new Error ('Errore nel recupero degli articoli')
            }
    }catch (error) {
        console.log('error', error)
    }
}

    useEffect(() => {
        getArticles()
    }, [])
    
    return(
        <Container>
            <Row>
                {articles.map((article, index) => (
                    <ArticleDetails key={index} article={article} />
                ))}
            </Row>
        </Container>
    )
}

export default Articles