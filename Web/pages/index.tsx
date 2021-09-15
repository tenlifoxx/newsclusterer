import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import styles from'../styles/Home.module.css'
import {Modal, ListGroup, Row, Col, Tab} from 'react-bootstrap'

export const getStaticProps: GetStaticProps = async() => {
    const res = await fetch('http://localhost:3000/api/news')
    const data: JSON = await res.json()
    return {
        props:{
           newsData: Object.entries(data[0]).slice(1,)
        }
    }
}

const ModalPage = ({keywords,news,show,setShow}) => {
  return(
    news?
      <Modal size='lg'
            show={show}
            onHide={() => setShow(false)}
      >
        <Modal.Header closeButton> 
          <Modal.Title>{keywords.split(',').map(keyword => ` #${keyword} `)}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tab.Container defaultActiveKey="#link0">
            <Row>
              <Col sm={4}>
                <ListGroup>
                  {
                    news.map((n,index) =>
                    <ListGroup.Item action href={`#link${index}`}>
                      {n.title}
                    </ListGroup.Item>)
                  }
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  {
                    news.map((n,index) =>
                    <Tab.Pane eventKey={`#link${index}`}>
                      <p>{n.preview}</p>
                      <a href = {n.url}>원본 보기</a>
                    </Tab.Pane>)
                  }
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Modal.Body>
      </Modal> 
    : <></>
  )
}

export default function Main({newsData} : InferGetStaticPropsType<typeof getStaticProps>){
  const [show, setShow] = useState(false)
  const [currentNews, setCurrentNews] = useState([])
  const [currentKeyWords,setCurrentKeyWords] = useState("")
  return(
    <div className={styles.container}>
      {
          newsData.map(([keywords,news]) => 
            <>
            <div className={styles.card} onClick={() => {setShow(true); setCurrentNews(news); setCurrentKeyWords(keywords)}}>
                {
                  keywords.split(',').map(keyword => <h3>#{keyword}</h3>)
                }
            </div>
            </>
          )
        }
      <ModalPage keywords = {currentKeyWords} news = {currentNews} show = {show} setShow = {setShow}></ModalPage>
    </div>
  );
}