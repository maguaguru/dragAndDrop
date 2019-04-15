import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnswerItem from '../Components/AnswerItem';
import UserAnswerActions, { removeAnswer, removeAnswerByLabelId } from '../Redux/UserAnswerReducer';

class UserAnswer extends Component {
    constructor(props) {
        super(props);
        this.handleAnswerItemRemove = this.handleAnswerItemRemove.bind(this);
        this.handleAnswerItemEndDrag = this.handleAnswerItemEndDrag.bind(this);
        this.handleSwitchAnswer = this.handleSwitchAnswer.bind(this);
    }

    handleAnswerItemRemove(targetId){
        this.props.removeAnswer(targetId)
    }

    handleAnswerItemEndDrag(item, targetId, labelId) {
        console.log(' !!! handleEndDrag! ' + item);
        labelId ? this.handleSwitchAnswer(item, targetId, labelId)
          : this.props.addAnswer(item, targetId);
    }

    handleSwitchAnswer(item, targetId, labelId) {
        console.log('handleSwitchAnswer: item.id ', item.id);
        console.log('handleSwitchAnswer: targetId ', targetId);
        console.log('handleSwitchAnswer: labelId ', labelId);
        this.props.replaceAnswer(item, targetId);
        this.props.removeAnswer(item.id, targetId);
    }

    render() {
        console.log('##### userAnswer: ', this.props.userAnswer);
        return (
          <React.Fragment>
              {
                  this.props.userAnswer.map((item, i) => {
                      return (
                        <AnswerItem key={`item_${i}`} index={i} removeAnswer={this.handleAnswerItemRemove} handleAnswerItemEndDrag={this.handleAnswerItemEndDrag}
                                    answerItem={item.answerItem} targetId={item.answer.targetId} />);
                  })
              }
          </React.Fragment>

        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addAnswer: (answerItem, targetId) => dispatch(UserAnswerActions.addAnswer(answerItem, targetId)),
    removeAnswer: (targetId) => dispatch(UserAnswerActions.removeAnswer(targetId)),
    removeAnswerByLabelId: (labelId) => dispatch(UserAnswerActions.removeAnswerByLabelId(labelId)),
    replaceAnswer: (answerItem, targetId) => dispatch(UserAnswerActions.replaceAnswer(answerItem, targetId)),
});

export default connect(null, mapDispatchToProps)(UserAnswer);