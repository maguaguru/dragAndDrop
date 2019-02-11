import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Alert } from 'reactstrap';
import Background from './../Components/Background'
import QuestionDataActions from '../Redux/QuestionDataReducer';
import { StyledWorkarea } from '../styledComponents';
import DragObjects from './DragObjects';
import Targets from './Targets';


class WorkArea extends Component {

    componentDidMount() {
        const {questionDataUrl, loadQuestionData} = this.props
        loadQuestionData(questionDataUrl)
    }

    render () {
        const {loadingStatus,errorCode, width, height, workarea} = this.props.questionData

        console.log('workarea.labels: ', workarea.labels)
        return (
          <React.Fragment>
              {loadingStatus !== 'error' ?
                <StyledWorkarea x={this.props.x} y={this.props.y} width={`${width}px`} height={`${height}px`}>
                    <Background background={workarea.background}></Background>
                    {workarea.targets && workarea.targets.length &&
                    <Targets targets={workarea.targets}/>}
                    {workarea.labels && workarea.labels.length &&
                          <DragObjects labels={workarea.labels}/>}
                </StyledWorkarea>
                :
                <Alert color="danger">Error loading data: {errorCode}</Alert>
              }
          </React.Fragment>

        )
    }
}

const mapStateToProps = (state) => ({
    questionDataUrl: state.settings.questionDataUrl,
    questionData: state.questionData

})

const mapDispatchToProps = (dispatch) => ({
    loadQuestionData: (url) => dispatch(QuestionDataActions.loadQuestionData(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkArea)