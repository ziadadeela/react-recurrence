import { createStyles, Theme } from '@material-ui/core'

export default (theme: Theme) => {
  return createStyles({
    daysContainer: {
      display: 'inline-flex',
      margin: theme.spacing(2)
    },
    dayButton: {
      width: 24,
      height: 24,
      fontSize: theme.typography.pxToRem(10),
      textTransform: 'capitalize',
      minWidth: 24,
      borderRadius: '50%',
      marginRight: theme.spacing(1.5),
      backgroundColor: '#e8e8e8'
    },
    dayButtonLabel: {
      fontSize: theme.typography.pxToRem(14),
      fontWeight: 'normal'
    },
    selected: {
      '&.Mui-disabled': {
        color: theme.palette.common.white
      },
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.white,
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.common.white
      }
    }
  })
}
