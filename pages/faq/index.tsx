import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { GetStaticProps } from 'next'
import Layout from '../../components/layout/layout'
import { connectDatabase, getAllDocuments } from '../../db/db-connect'

export interface FaqModel {
  id: string
  question: string
  answer: string
}

interface FaqProps {
  faq: FaqModel[]
}

export default function Faq({ faq }: FaqProps) {
  return (
    <Layout title='Вопросы и ответы'>
      <div>
        {faq.map((f) => (
          <Accordion key={f.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography variant='h6'>{f.question}</Typography>
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
  let client
  try {
    client = await connectDatabase()
  } catch (err) {
    throw new Error('Connecting failed')
  }
  const documents = await getAllDocuments(client, 'faqs', { _id: 1 })
  client.close()

  if (!documents) {
    return {
      notFound: true,
    }
  }
  const faqData = documents.map((el) => ({
    id: el._id.toString(),
    answer: el.answer,
    question: el.question,
  }))

  return {
    props: {
      faq: faqData,
    },
    revalidate: 3600,
  }
}
