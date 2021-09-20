var style = ({
    Root: {
        height: '290px'
    },
    Banner: {
        height: '500px',
        position: 'relative',
        borderRadius: 0,
        boxShadow: "none"
    },
    Media: {
        backgroundColor: 'white',
        height: '100%',
        width: '220px',
        overflow: 'hidden',
        position: 'relative',
        //boxShadow: '5px 5px 7px grey',
        transition: '300ms',
        cursor: 'pointer',
        '&:hover': {
            filter: 'brightness(115%)'
        }
    },
    BannerGrid: {
        height: '100%',
        position: 'relative',
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
        height: '50%',
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