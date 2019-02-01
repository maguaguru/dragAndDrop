import { call, put } from 'redux-saga/effects';
import QuestionDataActions from '../Redux/QuestionDataReducer';
import * as questionDataAPI from '../API/questionDataAPI'

export function * loadQuestionData(args){
    const response = yield call(questionDataAPI.loadQuestionData, args)

    if (response.err) {
        yield put(QuestionDataActions.setQuestionDataStatus('error', response.err.response.status))
    } else {
        yield put(QuestionDataActions.setQuestionData(response.data))
    }

}