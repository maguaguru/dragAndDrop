import Immutable from 'seamless-immutable'
import { createReducer, createActions } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
    questionDataUrl: '/wpng/api/v1/dndquestion'
})

const { Types, Creators } = createActions({
    setQuestionSettings: ['questionSettings'],
    setQuestionSettingsStatus: ['status']
})

export const SettingTypes = Types
export default Creators

export const setQuestionSettings = (state, questionSettings) =>
  state.merge({...questionSettings})

export const setQuestionSettingsStatus = (state, status) => state.merge({ loadingStatus: status })

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SET_QUESTION_SETTINGS]: setQuestionSettings,
    [Types.SET_QUESTION_SETTINGS_STATUS]: setQuestionSettingsStatus
})