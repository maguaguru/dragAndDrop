import React, { PureComponent } from 'react';
import { StyledWorkarea } from '../styledComponents';

export class WorkArea extends PureComponent {
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