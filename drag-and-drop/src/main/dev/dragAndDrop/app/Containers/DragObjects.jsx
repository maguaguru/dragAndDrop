import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import DragObject from './../Components/DragObject';
import UserAnswerActions from '../Redux/UserAnswerReducer';

class DragObjects extends PureComponent {

    constructor(props) {
        super(props);
        this.handleEndDrag = this.handleEndDrag.bind(this);
    }

    handleEndDrag(item, targetId, labelId) {
        console.log(' !!! handleEndDrag! ' + item, '  labelId:  ', labelId,  '  targetId:  ', targetId);
        labelId ? this.props.replaceAnswer(item, targetId)
          : this.props.addAnswer(item, targetId);
    }

    render() {
        return (
          <React.Fragment>
              {
                  this.props.labels.map((item, i) => {
                      return (<DragObject key={`item_${i}`} item={item} handleEndDrag={this.handleEndDrag} />);
                  })
              }
          </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addAnswer: (answerItem, targetId) => dispatch(UserAnswerActions.addAnswer(answerItem, targetId)),
    replaceAnswer: (answerItem, targetId) => dispatch(UserAnswerActions.replaceAnswer(answerItem, targetId)),
});

export default connect(null, mapDispatchToProps)(DragObjects);