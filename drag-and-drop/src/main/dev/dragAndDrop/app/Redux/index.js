import { combineReducers } from 'redux'
import { reducer as SettingsReducer } from './SettingsReducer'
import { reducer as QuestionDataReducer } from './QuestionDataReducer'
import { reducer as UserAnswerReducer } from './UserAnswerReducer'

export const mainReducer =  combineReducers({
    settings: SettingsReducer,
    questionData: QuestionDataReducer,
    answerData: UserAnswerReducer
})


