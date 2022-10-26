import { TreeItem, TreeItemProps } from '@mui/lab'
import { SvgIconProps, Typography } from '@mui/material'

type TProps = TreeItemProps & {
  bgColor?: string
  color?: string
  labelIcon: React.ElementType<SvgIconProps>
  labelInfo?: string
  labelText: string
}

export function StyledTreeItem(props: TProps) {
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
        <div>
          <LabelIcon color='inherit' />
          <Typography variant='body2'>{labelText}</Typography>
          <Typography variant='caption' color='inherit'>
            {labelInfo}
          </Typography>
        </div>
      }
      {...other}
    />
  )
}
