
import { Card, Col } from 'react-bootstrap'
import { ArticlesT } from '../types/ArticlesT'

interface ArticleDetailsProps {
    article: ArticlesT

}

const ArticleDetails = (props : ArticleDetailsProps)  => {
    return (
        <Col xs={12} md={4}>
             <Card >
            <Card.Img variant="top" src={props.article.results.image_url} alt={props.article.results.title} />
            <Card.Body>
                <Card.Title>{props.article.results.title}</Card.Title>
                <Card.Text>
                    {props.article.summary}
                </Card.Text>
                <Card.Link href={props.article.url} target="_blank">Read more</Card.Link>
            </Card.Body>
        </Card>
        </Col>
        
    )
}

export default ArticleDetails