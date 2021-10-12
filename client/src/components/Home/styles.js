import { makeStyles } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
const breakpoints = createBreakpoints({})

const useStyles = makeStyles((theme) => ({
    banner: {
        width: '100%',
        position: 'absolute',
        zIndex: '1',
        [breakpoints.down('xs')]: {
            display: 'none'
        },
    },
    menu: {
        position: 'relative',
        zIndex: '2',
        margin: '25px',
        [breakpoints.down('lg')]: {
            width: '560px',
        },
        [breakpoints.down('md')]: {
            width: '560px',
        },
        [breakpoints.down('sm')]: {
            width: '560px',
        },
        [breakpoints.down('xs')]: {
            margin: '0%',
            width: '100%',
            borderBottom: '2px solid gray',
        },
    },
    title: {
        display: 'inline-block',
        fontSize: '26px',
        fontFamily: 'MyFont2',
        width: '100%',
        marginTop: '60px',
        marginBottom: '10px',
        paddingLeft: '20px',
        [breakpoints.down('xs')]: {
            marginTop: '40px',
            marginBottom: '10px',
            paddingLeft: '20px',
        },
    },
    carousel: {
        height: '280px',
        [breakpoints.down('xs')]: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: 0,
            width: '100%'
        },
    },
    mobile: {
        display: 'none',
        [breakpoints.down('xs')]: {
            display: 'flex'
        },
    },
    test: {
        border: '2px solid black',
        height: '400px',
        width: '400px'
    }
}))

export default useStyles