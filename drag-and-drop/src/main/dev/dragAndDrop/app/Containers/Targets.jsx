import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserAnswerActions from '../Redux/UserAnswerReducer';
import Target from './../Components/Target'

class Targets extends Component {
    constructor(props){
        super(props)
    }

    // handleDrop(targetId, labelId){
    //     console.log("handleDrop: targetId: ", targetId)
    //     console.log("handleDrop: labelId: ", labelId)
    //     this.props.addUserAnswer(targetId, labelId)
    // }

    render () {
        return (
          <React.Fragment>
              {
                  this.props.targets.map((item, i) => {
                      return (<Target key={`item_${i}`} target={item} handleDrop={(targetId, labelId) => this.handleDrop(targetId, labelId)}/>)
                  })
              }
          </React.Fragment>

        )
    }
}

export default Targets