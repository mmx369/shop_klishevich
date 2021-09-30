import { makeStyles, Theme, createStyles, Typography } from '@material-ui/core'
import { TreeItem, TreeItemProps, TreeView } from '@material-ui/lab'
import React from 'react'
import router from 'next/router'
import { SvgIconProps } from '@material-ui/core/SvgIcon'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import { ArrowRight, Label, Money } from '@material-ui/icons'
import { translateCountry } from '../translate/country'

declare module 'csstype' {
  interface Properties {
    '--tree-view-color'?: string
    '--tree-view-bg-color'?: string
  }
}

type StyledTreeItemProps = TreeItemProps & {
  bgColor?: string
  color?: string
  labelIcon: React.ElementType<SvgIconProps>
  labelInfo?: string
  labelText: string
}

const useTreeItemStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.text.secondary,
      '&:hover > $content': {
        backgroundColor: theme.palette.action.hover,
      },
      '&:focus > $content, &$selected > $content': {
        backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
        color: 'var(--tree-view-color)',
      },
      '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label':
        {
          backgroundColor: 'transparent',
        },
    },
    content: {
      color: theme.palette.text.secondary,
      borderTopRightRadius: theme.spacing(2),
      borderBottomRightRadius: theme.spacing(2),
      paddingRight: theme.spacing(1),
      fontWeight: theme.typography.fontWeightMedium,
      '$expanded > &': {
        fontWeight: theme.typography.fontWeightRegular,
      },
    },
    group: {
      marginLeft: 0,
      '& $content': {
        paddingLeft: theme.spacing(2),
      },
    },
    expanded: {},
    selected: {},
    label: {
      fontWeight: 'inherit',
      color: 'inherit',
    },
    labelRoot: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0.5, 0),
    },
    labelIcon: {
      marginRight: theme.spacing(1),
    },
    labelText: {
      fontWeight: 'inherit',
      flexGrow: 1,
    },
  })
)

function StyledTreeItem(props: StyledTreeItemProps) {
  const classes = useTreeItemStyles()
  const {
    labelText,
    labelIcon: LabelIcon,
    labelInfo,
    color,
    bgColor,
    ...other
  } = props

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  )
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 300,
    height: 264,
  },
})

export default function Catalog({ listOfCountries, listOfCountriesCoins }) {
  const classes = useStyles()

  const handleClick = async (type, country) => {
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
    <div style={{overflow:'scroll'}}>
      <TreeView
        className={classes.root}
        defaultExpanded={['1', '2']}
        defaultCollapseIcon={<ArrowDropDownIcon />}
        defaultExpandIcon={<ArrowRightIcon />}
        defaultEndIcon={<div style={{ width: 24 }} />}
      >
        <StyledTreeItem nodeId="1" labelText="Каталог" labelIcon={Label}>
          <StyledTreeItem nodeId="2" labelText="Банкноты" labelIcon={Money}>
            <StyledTreeItem
              nodeId="8"
              labelText="Показать все"
              labelIcon={ArrowRight}
              onLabelClick={() => handleClick('Paper Money', 'all')}
            />

            {listOfCountries?.map((el, index) => (
              <StyledTreeItem
                key={el.country}
                nodeId={String(index + 10)}
                labelIcon={ArrowRight}
                labelText={`${translateCountry(el.country)}`}
                labelInfo={el.count}
                color="#1a73e8"
                bgColor="#e8f0fe"
                onLabelClick={() => handleClick('Paper Money', el.country)}
              />
            ))}
          </StyledTreeItem>
          <StyledTreeItem nodeId="5" labelText="Монеты" labelIcon={Money}>
            <StyledTreeItem
              nodeId="9"
              labelText="Показать все"
              labelIcon={ArrowRight}
              onLabelClick={() => handleClick('Coins', 'all')}
            />
            {listOfCountriesCoins.map((el, index) => (
              <StyledTreeItem
                key={el.country}
                nodeId={String(index + 100)}
                labelText={`${translateCountry(el.country)}`}
                labelIcon={ArrowRight}
                labelInfo={el.count}
                color="#1a73e8"
                bgColor="#e8f0fe"
                onLabelClick={() => handleClick('Coins', el.country)}
              />
            ))}
          </StyledTreeItem>
        </StyledTreeItem>
      </TreeView>
    </div>
  )
}
