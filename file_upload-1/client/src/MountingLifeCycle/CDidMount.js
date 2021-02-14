import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class CDidMount extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Denish"
        }
        console.log('Lifeycle A construnctor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycle A getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }
    
    render() {
        console.log('Lifecycle A render')
        return (
            <div>
                Lifecycle A
                <LifecycleB/>
            </div>
        )
    }
}

export default CDidMount
