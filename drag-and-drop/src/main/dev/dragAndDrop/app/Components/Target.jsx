import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { Rectangle } from './../styledComponents';

// Drag sources and drop targets only interact
// if they have the same string type.
// You want to keep types in a separate file with
// the rest of your app's constants.
const Types = {
    DRAG_OBJECT: 'dragObject'
};

/**
 * Specifies the drop target contract.
 * All methods are optional.
 */
const chessSquareTarget = {
    canDrop(props, monitor) {
        // You can disallow drop based on props or item
        //const item = monitor.getItem();
        return true;
        //return canMakeChessMove(item.fromPosition, props.position);
    },

    hover(props, monitor, component) {
        // This is fired very often and lets you perform side effects
        // in response to the hover. You can't handle enter and leave
        // here—if you need them, put monitor.isOver() into collect() so you
        // can just use componentDidUpdate() to handle enter/leave.

        // You can access the coordinates if you need them
        const clientOffset = monitor.getClientOffset();

        //const componentRect = findDOMNode(component).getBoundingClientRect();

        // You can check whether we're over a nested drop target
        const isJustOverThisOne = monitor.isOver({ shallow: true });

        // You will receive hover() even for items for which canDrop() is false
        const canDrop = monitor.canDrop();
    },

    drop(props, monitor, component) {
        if (monitor.didDrop()) {
            // If you want, you can check whether some nested
            // target already handled drop
            return;
        }

        // Obtain the dragged item
        //const item = monitor.getItem();

        // You can do something with it
        //ChessActions.movePiece(item.fromPosition, props.position);

        // You can also do nothing and return a drop result,
        // which will be available as monitor.getDropResult()
        // in the drag source's endDrag() method
        //return { moved: true };
        return {targetId: props.target.id, position: {x: props.target.x, y: props.target.y}}
    }
};

/**
 * Specifies which props to inject into your component.
 */
function collect(connect, monitor) {
    return {
        // Call this function inside render()
        // to let React DnD handle the drag events:
        connectDropTarget: connect.dropTarget(),
        // You can ask the monitor about the current drag state:
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
        canDrop: monitor.canDrop(),
        itemType: monitor.getItemType()
    };
}

class Target extends Component {

    render() {
        const { id, x, y, shape } = this.props.target;
        // These props are injected by React DnD,
        // as defined by your `collect` function above:
        const { isOver, canDrop, connectDropTarget } = this.props;
        const backgroundColor = isOver ? 'lightgreen' : shape.color

        return connectDropTarget(
          <div id={id} className="target" style={{ position: 'absolute', top: `${y}px`, left: `${x}px` }}>
              {shape && shape.type === 'rectangle' &&
              <Rectangle
                width={`${shape.width}px`}
                height={`${shape.height}px`}
                color={backgroundColor}>
              </Rectangle>}
          </div>

        );
    }
}

export default DropTarget(Types.DRAG_OBJECT, chessSquareTarget, collect)(Target);