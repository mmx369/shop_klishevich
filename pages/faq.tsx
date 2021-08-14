import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { GetStaticProps } from 'next'
import React from 'react'
import Layout from '../components/layout'
import ShopFaq from '../models/shopFaq'

export interface FaqModel {
  _id: number
  question: string
  answer: string
}

interface FaqProps {
  faq: string
}

export default function Faq({ faq }: FaqProps) {
  const list: FaqModel[] = JSON.parse(faq)
  return (
    <Layout title="Вопросы и ответы">
      <div>
        {list.map((f) => (
          <Accordion key={f._id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{f.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{f.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await ShopFaq.find({})
    const faq = JSON.stringify(data)
    return { props: { faq } }
  } catch (err) {
    console.error(err)
    return {
      notFound: true,
    }
  }
}
