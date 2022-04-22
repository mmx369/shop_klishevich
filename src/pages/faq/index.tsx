import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { InferGetStaticPropsType } from 'next'
import Layout from '../../components/layout/layout'
import { dbConnect } from '../../db/dbConnect'
import { serializeData } from '../../lib/serialize'
import FaqModel from '../../models/shopFaq'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: '50px',
      maxWidth: '900px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  })
)

export interface IFaqModel {
  _id: string
  question: string
  answer: string
}

export default function Faq({
  faq,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const classes = useStyles()
  return (
    <Layout title='Нумизматика и бонистика | Интернет-магазин | Продажа банкнот и монет |Вопросы и ответы'>
      <div className={classes.root}>
        {faq.map((f) => (
          <Accordion key={f._id}>
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

export const getStaticProps = async () => {
  await dbConnect()
  const faqList = await FaqModel.find().select('-date -__v')

  if (!faqList) {
    throw new Error(`Что-то пошло не так. Попробуйте позднее.`)
  }
  const faqListSerialized: IFaqModel[] = serializeData(faqList)
  return {
    props: {
      faq: faqListSerialized,
    },
    revalidate: 3600,
  }
}
