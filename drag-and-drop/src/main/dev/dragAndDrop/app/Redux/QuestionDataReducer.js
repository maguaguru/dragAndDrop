import Immutable from 'seamless-immutable';
import { createReducer, createActions } from 'reduxsauce';

export const INITIAL_STATE = Immutable({
    width: 0,
    height: 0,
    workarea: {
        background: {
            width: 0,
            height: 0,
            url: ''
        }
    },
    loadingStatus: '',
    errorCode: 0
});

const { Types, Creators } = createActions({
    loadQuestionData: ['url'],
    setQuestionData: ['questionData'],
    setQuestionDataStatus: ['status', 'errorCode']
});

export const QuestionDataTypes = Types;
export default Creators;

export const setQuestionData = (state, { questionData }) => state.merge({ ...questionData, loadingStatus: 'ok' });

export const setQuestionDataStatus = (state, { status, errorCode }) =>
  state.merge({
      loadingStatus: status,
      errorCode: errorCode
  });

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SET_QUESTION_DATA]: setQuestionData,
    [Types.SET_QUESTION_DATA_STATUS]: setQuestionDataStatus
});