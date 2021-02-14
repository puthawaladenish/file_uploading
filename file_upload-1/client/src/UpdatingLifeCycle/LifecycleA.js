import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Neme: "Denish"
        }
        console.log('Lifecycle A Construntor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Lifecycle A getDerivedStateFromProps")
        return null;
    }

    componentDidMount() {
        console.log("Lifecycle A componentDidMount")
    }
    shouldComponentUpdate() {
        console.log("Lifecycle A shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Lifecycle A getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate() {
        console.log("Lifecycle A componentDidUpdate")
    }

    changeState = () => {
        this.setState({
            name:"Shinie"
        })
    }
    render() {
        console.log('Lifecycle A render')
        return (
            <div>
                LifeCycle A
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB/>
            </div>
        )
    }
}
export default LifecycleA
