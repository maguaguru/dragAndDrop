import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import logo from './logo.svg';
import './App.css';
import WorkArea from './main/dev/dragAndDrop/app/Containers/WorkArea';
import QuestionDataActions from './main/dev/dragAndDrop/app/Redux/QuestionDataReducer';

class App extends Component {

    componentDidMount() {
        const {questionDataUrl, loadQuestionData}  =  this.props
        loadQuestionData(questionDataUrl)
    }

  render() {
    return (
      <WorkArea x={"10px"} y={"10px"} width={'500px'} height={'500px'}/>
    );
  }
}

const mapStateToProps = (state) => ({
    questionDataUrl: state.settings.questionDataUrl

})

const mapDispatchToProps = (dispatch) => ({
    loadQuestionData: (url) => dispatch(QuestionDataActions.loadQuestionData(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
