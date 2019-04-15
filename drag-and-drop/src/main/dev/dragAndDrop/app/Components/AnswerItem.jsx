import React, { Component} from 'react';
import propTypes from 'prop-types';
import { Rectangle } from '../styledComponents';
import { DragSource, DropTarget } from 'react-dnd';
import _ from 'lodash'

const Types = {
    ANSWER_ITEM: 'dragObject'

};

/* get dragged */
const sourceSpec = {
    beginDrag(props){
        console.log('begin drag! -> ' + props.answerItem)
        return props.answerItem;
    },

    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
            // You can check whether the drop was successful
            // or if the drag ended but nobody handled the drop
            return props.removeAnswer(props.targetId);
        }

        const item = monitor.getItem();
        const target = monitor.getDropResult()
        const dragAnswerItem = {
            ...props.answerItem,
            x: target.position.x,
            y: target.position.y
        }

        return props.handleAnswerItemEndDrag(dragAnswerItem, target.targetId, target.labelId);

    }
}

const sourceCollect  = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}


/* get dragged onto */
const targetSpec  = {
    canDrop(props, monitor) {
        // You can disallow drop based on props or item
        //const item = monitor.getItem();
        return true;
        //return canMakeChessMove(item.fromPosition, props.position);
    },
    drop(props, monitor, component) {
        const item = monitor.getItem()
        console.log("new aAnswer item: ", item)

        return {targetId: props.targetId, labelId: props.answerItem.id,  position: {x: props.answerItem.x, y: props.answerItem.y} }
    },
    hover(props, monitor, component){
        console.log("yo what you hoverin there for homie?")
    }
}

const targetCollect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        canDrop: monitor.canDrop(),
        isOver: monitor.isOver()
    }
}



class AnswerItem extends Component {

    render() {
        const { isDragging, connectDragSource, connectDropTarget } = this.props;
        const { id, x, y, shape, textbox } = this.props.answerItem;
        return connectDropTarget(connectDragSource(
          <div id={id} className="dragItem"
               style={{ position: 'absolute', top: `${y}px`, left: `${x}px` }}>
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
        ))
    }
}

AnswerItem.propTypes = {
    id: propTypes.string,
    targetId: propTypes.string.isRequired,
    answerItem: propTypes.object.isRequired,
    handleAnswerItemEndDrag: propTypes.func.isRequired,
};

export default _.flow([DropTarget(Types.ANSWER_ITEM, targetSpec, targetCollect), DragSource(Types.ANSWER_ITEM, sourceSpec, sourceCollect)])(AnswerItem)
