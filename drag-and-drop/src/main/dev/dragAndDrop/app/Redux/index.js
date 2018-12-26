import { combineReducers } from 'redux'
import { reducer as SettingsReducer } from './SettingsReducer'
import { reducer as QuestionDataReducer } from './QuestionDataReducer'

export const mainReducer =  combineReducers({
    settings: SettingsReducer,
    questionData: QuestionDataReducer

   })


