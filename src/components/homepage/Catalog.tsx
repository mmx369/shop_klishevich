import { TreeView } from '@mui/lab'
import router from 'next/router'
import { ArrowRight, Label, Money, ArrowDropDown } from '@mui/icons-material'
import { translateCountry } from '../../lib/translate'
import { StyledTreeItem } from './StyledTreeItem'
import { ICountryCount } from '../../lib/getCountry'
import { makeStyles, createStyles } from '@mui/styles'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: 20,
      backgroundColor: 'red',
    },
  })
)

interface TProps {
  listOfCountries: ICountryCount[]
  listOfCountriesCoins: ICountryCount[]
}

export default function Catalog({
  listOfCountries,
  listOfCountriesCoins,
}: TProps) {
  const classes = useStyles()
  const handleClick = async (type: string, country: string) => {
    router.push(
      {
        pathname: '/shop',
        query: {
          type,
          country,
          page: 1,
        },
      },
      undefined,
      { shallow: true }
    )
  }

  return (
    <div className={classes.root}>
      <TreeView
        defaultExpanded={['1', '2']}
        defaultCollapseIcon={<ArrowDropDown />}
        defaultExpandIcon={<ArrowRight />}
        defaultEndIcon={<div style={{ width: 24 }} />}
      >
        <StyledTreeItem nodeId='1' labelText='Каталог' labelIcon={Label}>
          <StyledTreeItem nodeId='2' labelText='Банкноты' labelIcon={Money}>
            <StyledTreeItem
              nodeId='8'
              labelText='Показать все'
              labelIcon={ArrowRight}
              onClick={() => handleClick('Paper Money', 'all')}
            />

            {listOfCountries.map((el, index) => (
              <StyledTreeItem
                key={el.country}
                nodeId={String(index + 10)}
                labelIcon={ArrowRight}
                labelText={`${translateCountry(el.country)}`}
                labelInfo={el.count.toString()}
                color='#1a73e8'
                bgColor='#e8f0fe'
                onClick={() => handleClick('Paper Money', el.country)}
              />
            ))}
          </StyledTreeItem>
          <StyledTreeItem nodeId='5' labelText='Монеты' labelIcon={Money}>
            <StyledTreeItem
              nodeId='9'
              labelText='Показать все'
              labelIcon={ArrowRight}
              onClick={() => handleClick('Coins', 'all')}
            />
            {listOfCountriesCoins.map((el, index) => (
              <StyledTreeItem
                key={el.country}
                nodeId={String(index + 100)}
                labelText={`${translateCountry(el.country)}`}
                labelIcon={ArrowRight}
                labelInfo={el.count.toString()}
                color='#1a73e8'
                bgColor='#e8f0fe'
                onClick={() => handleClick('Coins', el.country)}
              />
            ))}
          </StyledTreeItem>
        </StyledTreeItem>
      </TreeView>
    </div>
  )
}
