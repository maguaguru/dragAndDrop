import React, { PureComponent }from 'react';
import { Rectangle } from './../styledComponents'
import { DragSource } from 'react-dnd';

// Drag sources and drop targets only interact
// if they have the same string type.
// You want to keep types in a separate file with
// the rest of your app's constants.
const Types = {
    DRAG_OBJECT: 'dragObject'
};

/**
 * Specifies the drag source contract.
 * Only `beginDrag` function is required.
 */
const cardSource = {
    canDrag(props) {
        console.log("canDrag props.isReady: " , props.isReady)
        // You can disallow drag based on props
        return true;
    },

    isDragging(props, monitor) {
        // If your component gets unmounted while dragged
        // (like a card in Kanban board dragged between lists)
        // you can implement something like this to keep its
        // appearance dragged:
        console.log("isDragging " + props.item.id)
        return monitor.getItem().id === props.item.id;
    },

    beginDrag(props, monitor, component) {
        // Return the data describing the dragged item

        return props.item;
    },

    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
            // You can check whether the drop was successful
            // or if the drag ended but nobody handled the drop
            return;
        }

        return props.handleDrop(props.item.id);

        // When dropped on a compatible target, do something.
        // Read the original dragged item from getItem():
        //const item = monitor.getItem();

        // You may also read the drop result from the drop target
        // that handled the drop, if it returned an object from
        // its drop() method.
        //const dropResult = monitor.getDropResult();

        // This is a good place to call some Flux action
        //CardActions.moveCardToList(item.id, dropResult.listId);
    }
};

/**
 * Specifies which props to inject into your component.
 */
function collect(connect, monitor) {
    return {
        // Call this function inside render()
        // to let React DnD handle the drag events:
        connectDragPreview: connect.dragPreview(),
        connectDragSource: connect.dragSource(),
        // You can ask the monitor about the current drag state:
        isDragging: monitor.isDragging()
    };
}


class DragObject extends PureComponent {

    render () {
        // These props are injected by React DnD,
        // as defined by your `collect` function above:
        const { isDragging, connectDragSource} = this.props;
        const {id, x, y, shape, textbox} = this.props.item

        return connectDragSource(
          <div id={id} className="dragObject" style={{ position: 'absolute', top: `${x}px`, left: `${y}px`}}>
              <span>Test</span>
          </div>
        )
                {/*{shape && shape.type === 'rectangle' &&*/}
                  {/*<Rectangle*/}
                    {/*width={`${shape.width}px`}*/}
                    {/*height={`${shape.height}px`}*/}
                    {/*color={shape.color}>*/}
                      {/*{textbox &&*/}
                      {/*<span>{textbox.text}</span>*/}
                      {/*}*/}
                  {/*</Rectangle>*/}
                  {/*}*/}
    }
}

export default DragSource(Types.DRAG_OBJECT, cardSource, collect)(DragObject)