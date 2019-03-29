import React from 'react'
import propTypes from 'prop-types'
import { Rectangle } from '../styledComponents';

const DragObjectItem = (props) => {
    const {id, x, y, shape, textbox} = props

    return (
      <div id={id} className="dragItem" style={{ position: 'absolute', top: `${y}px`, left: `${x}px` }}>
          {shape && shape.type === 'rectangle' &&
          <Rectangle
            width={`${shape.width}px`}
            height={`${shape.height}px`}
            color={shape.color}>
              {textbox &&
              <span>{textbox.text}</span>
              }
          </Rectangle>
          }
      </div>
    )
}

DragObjectItem.propTypes = {
    id: propTypes.string,
    x: propTypes.number.isRequired,
    y: propTypes.number.isRequired,
    shape: propTypes.object.isRequired,
    textbox: propTypes.object.isRequired
}

export default DragObjectItem