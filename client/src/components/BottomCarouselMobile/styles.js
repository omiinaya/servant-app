var style = ({
    Root: {
        height: '370px'

    },
    Project: {
        position: 'relative',
        height: '300px',
        overflow: 'hidden',
    },
    Media: {
        backgroundColor: 'white',
        height: '300px',
        width: '330px',
        overflow: 'hidden',
        position: 'relative',
        transition: '300ms',
        cursor: 'pointer',
        '&:hover': {
            filter: 'brightness(115%)'
        }
    },
    MediaCaption: {
        textOverflow: 'ellipsis',
        position: 'absolute',
        bottom: 0,
        padding: '15px',
        backgroundColor: 'black',
        color: 'white',
        opacity: 0.6,
        width: '100%',
        height: '23%',
        fontSize: '25px',
        fontWeight: 200,
        transition: '300ms',
        cursor: 'pointer',
        '&:hover': {
            opacity: 0.8
        }
    }
})

export default style