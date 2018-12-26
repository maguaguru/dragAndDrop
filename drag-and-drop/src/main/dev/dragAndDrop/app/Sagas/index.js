import { all, takeLatest } from 'redux-saga/effects';
import { QuestionDataTypes } from '../Redux/QuestionDataReducer'


import { loadQuestionData } from './questionDataSaga';

export default function * rootSaga() {
    yield all([
        takeLatest(QuestionDataTypes.LOAD_QUESTION_DATA, loadQuestionData),
    ]);
}