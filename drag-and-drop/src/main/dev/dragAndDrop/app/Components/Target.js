import React, { PureComponent }from 'react';
import { StyledTarget } from './../styledComponents'

class Target extends PureComponent {

    render () {
        console.log("Target: ", this.props.item)
        const {id, x, y, shape} = this.props.item
        return (
          <React.Fragment>
              <StyledTarget
                id={id}
                x={`${x}px`}
                y={`${y}px`}
                width={`${shape.width}px`}
                height={`${shape.height}px`}
                color={shape.color}>
              </StyledTarget>
          </React.Fragment>

        )
    }
}

export default Target