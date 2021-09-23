import React from 'react'

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
        //console.log(next)
        //console.log(this.state.page)
    }

    render() {
        if (this.state.page === 0) {
            return (
                <div>
                    <div>{this.props.name}</div>
                    <div><button onClick={() => this.smoke(this.state.page)}>buttplug</button></div>
                </div>
            )
        } else {
            return (
                <div>Success.</div>
            )
        }

    }
}