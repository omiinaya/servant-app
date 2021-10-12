import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
const breakpoints = createBreakpoints({})

const styles = theme => ({
    root: {
      '& > *': {
        margin: '2%',
        marginBottom: '1%',
        width: '96%',
      },
    },
    container: {
      '& > *': {
        display: 'flex',
        justifyContent: 'space-between'
      },
    },
    overhalf: {
      '& > *': {
        width: '75%',
      },
    },
    half: {
      '& > *': {
        width: '50%',
      },
    },
    fourth: {
      '& > *': {
        width: '24%',
        marginRight: '2%'
      },
    },
    map: {
      position: 'absolute',
      top: '14%',
      width: '96%',
      margin: '2%',
      height: '78%',
      zIndex: 2,
      [breakpoints.down('xs')]: {
        top: '115px',
        width: '96%',
        height: '635px',
        margin: '2%',
      },
    },
    search: {
      position: 'absolute',
      width: '96%',
      zIndex: 2
    },
    buttons: {
      position: 'absolute',
      bottom: 0,
      zIndex: 2,
      width: '96%',
      margin: '2%'
    },
  })

  export default styles