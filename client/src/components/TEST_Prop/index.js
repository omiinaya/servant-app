import React from 'react'

export default class XD extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            drugs: ''
        };
    }

    componentDidMount() {
        console.log(this.props)
    }

    componentWillUnmount() {
        console.log('goodbye')
    }

    smoke() {
        this.setState({ drugs: 'weed' })
        console.log(this.state.drugs)
    }

    render() {
        return (
            <div>
                <div>{this.props.name}</div>
                <div><button onClick={() => this.smoke()}>buttplug</button></div>
            </div>
        )

    }
}