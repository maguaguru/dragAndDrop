import Immutable from 'seamless-immutable'
import { createReducer, createActions } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
})

const { Types, Creators } = createActions({
    loadQuestionData: ['url'],
    setQuestionData: ['questionData'],
    setQuestionDataStatus: ['status']
})

export const QuestionDataTypes = Types
export default Creators

export const setQuestionData = (state, {questionData}) =>  state.merge({...questionData})

export const setQuestionDataStatus = (state, status) => state.merge({ loadingStatus: status })

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SET_QUESTION_DATA]: setQuestionData,
    [Types.SET_QUESTION_DATA_STATUS]: setQuestionDataStatus
})