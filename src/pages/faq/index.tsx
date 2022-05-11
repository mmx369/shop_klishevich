import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import Layout from '../../components/layout/layout'
import { dbApi } from '../../db/dbApi'
import { serializeData } from '../../lib/serialize'

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

type TProps = {
  faq: IFaqModel[]
}

export default function Faq({ faq }: TProps) {
  const classes = useStyles()

  return (
    <Layout title='Нумизматика и бонистика | Интернет-магазин | Продажа банкнот и монет |Вопросы и ответы'>
      <div className={classes.root} data-testid='faqpage'>
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
  const faqList = await dbApi.getFaqList()

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
