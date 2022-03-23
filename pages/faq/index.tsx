import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { GetStaticProps } from 'next'
import Layout from '../../components/layout/layout'
import { dbConnect } from '../../db/dbConnect'
import FaqModel from '../../models/shopFaq'

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
  await dbConnect()
  const faqList = await FaqModel.find().select('-date -__v')

  if (!faqList) {
    return {
      notFound: true,
    }
  }

  const faqListSerialized = faqList.map((el) => ({
    id: el._id.toString(),
    question: el.question,
    answer: el.answer,
  }))

  return {
    props: {
      faq: faqListSerialized,
    },
    revalidate: 3600,
  }
}
