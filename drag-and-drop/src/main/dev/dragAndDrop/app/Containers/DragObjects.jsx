import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import DragObject from './../Components/DragObject'
import UserAnswerActions from '../Redux/UserAnswerReducer';

class DragObjects extends PureComponent {

    constructor(props){
        super(props)
        this.handleEndDrag = this.handleEndDrag.bind(this)
    }

    handleEndDrag(item){
        console.log(" !!! handleEndDrag! " + item)
        this.props.addDragObject(item)
    }

    render () {
        console.log('##### labels: ', this.props.labels)
        return (
          <React.Fragment>
              {
                  this.props.labels.map((item, i) => {
                      return (<DragObject key={`item_${i}`} item={item} handleEndDrag={(id) => this.handleEndDrag(id)}/>)
                  })
              }
          </React.Fragment>

        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addDragObject: (dragObject) => dispatch(UserAnswerActions.addDragObject(dragObject)),
})

export default connect(null,mapDispatchToProps)(DragObjects)