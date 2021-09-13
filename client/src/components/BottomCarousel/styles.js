export var mobileStyles = ({
    Banner: {
        height: '300px',
        position: 'relative'
    },
    Media: {
        backgroundColor: 'white',
        height: '30vh',
        width: '30vh',
        overflow: 'hidden',
        position: 'relative'
    },
    BannerGrid: {
        height: '100%',
        position: 'relative'
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
        height: '10vh',
        fontSize: '25px',
        fontWeight: 200,
        transition: '300ms',
        cursor: 'pointer',
        '&:hover': {
            opacity: 0.8
        }
    },
    Content: {
        color: 'white',
        backgroundColor: 'rgb(119, 24, 24)',
        height: '280px',
        position: 'relative',
        cursor: 'pointer',
        padding: '30px',
        transition: '300ms',
        '&:hover': {
            backgroundColor: 'rgb(87, 17, 17)e',
        },
        '&:active': {
            backgroundColor: 'rgb(87, 17, 17)',
        },
    },
    ViewButton: {
        backgroundColor: 'rgb(241, 241, 241)',
        color: 'rgb(119, 24, 24)'
    },
    Title: {
        fontSize: '40px',
        fontWeight: 500
    },
    Caption: {
        marginTop: '10px',
        fontSize: '21px'
    },
    ViewButton2: {
        marginTop: '40px',
        color: 'white',
        fontSize: '25px',
        border: '3px solid white',
        textTransform: 'capitalize',
        transition: '200ms'
    }
})

export var desktopStyles = ({
    Root: {
        height: '350px'
    },
    Banner: {
        height: '300px',
        position: 'relative',
        borderRadius: 0,
        boxShadow: "none"
    },
    Media: {
        backgroundColor: 'white',
        height: '110%',
        width: '220px',
        overflow: 'hidden',
        position: 'relative',
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
        height: '20%',
        fontSize: '25px',
        fontWeight: 200,
        transition: '300ms',
        cursor: 'pointer',
        '&:hover': {
            opacity: 0.8
        }
    }
})