import React from 'react'

const Testing = (props) => {
    return (
        <div>
            <div>{props.test1}</div>
            <div>{props.test2}</div>
        </div>
    )
}

export default class TEST_DynamicRendering extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 0
        };
    }

    componentDidMount() {
        //console.log(this.props)
    }

    componentWillUnmount() {
        //console.log(this.state.page)
    }

    smoke(a) {
        var next = a + 1
        this.setState({ page: next })
    }

    render() {
        if (this.state.page === 0) {
            return (
                <div>
                    <Testing test1="yes" />
                    <button onClick={() => this.smoke(this.state.page)}>buttplug</button>
                </div>
            )
        } else {
            return (
                <div>
                    <Testing test1="no" />
                    <button onClick={() => this.smoke(this.state.page)}>buttplug</button>
                </div>
            )
        }

    }
}