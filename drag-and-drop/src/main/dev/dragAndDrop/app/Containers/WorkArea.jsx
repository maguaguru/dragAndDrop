import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { StyledWorkarea } from '../styledComponents';


class WorkArea extends PureComponent {
    constructor (props) {
        super(props)
    }

    render () {

        return (
          <StyledWorkarea x={this.props.x} y={this.props.y} width={this.props.width} height={this.props.height}>

          </StyledWorkarea>
        )
    }
}

export default WorkArea