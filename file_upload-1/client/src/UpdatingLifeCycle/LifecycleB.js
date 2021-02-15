import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Neme: "Denish"
        }
        console.log('Lifecycle B Construntor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Lifecycle B getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("Lifecycle B componentDidMount")
    }
    shouldComponentUpdate() {
        console.log("Lifecycle B shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Lifecycle B getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate() {
        console.log("Lifecycle B componentDidUpdate")
    }
    render() {
        console.log('Lifecycle B render')
        return (
            <div>
                LifeCycle B
            </div>
        )
    }
}
export default LifecycleB
