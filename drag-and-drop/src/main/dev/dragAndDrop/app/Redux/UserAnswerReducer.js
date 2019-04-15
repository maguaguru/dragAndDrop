import Immutable from 'seamless-immutable';
import { createReducer, createActions } from 'reduxsauce';

export const INITIAL_STATE = Immutable({
    userAnswer: []
});

const { Types, Creators } = createActions({
    addAnswer: ['answerItem', 'targetId'],
    replaceAnswer: ['answerItem', 'targetId'],
    removeAnswer: ['targetId']
});

export const UserUanserTypes = Types;
export default Creators;


export const addAnswer = (state, { answerItem, targetId }) =>
  state.merge(
    state.userAnswer.some((userAnswerItem) => (userAnswerItem.answer.targetId === targetId && userAnswerItem.answer.labelId === answerItem.id)) ?
      {
          userAnswer: [...state.userAnswer]
      } :
      {
          userAnswer: [...state.userAnswer,
              {
                  answer: { targetId: targetId, labelId: answerItem.id },
                  answerItem: answerItem
              }
          ]

      }
  );

export const replaceAnswer = (state, { answerItem, targetId }) =>
  state.merge(
    {
        userAnswer: state.userAnswer.map((userAnswerItem) =>
          userAnswerItem.answer.targetId ===  targetId && userAnswerItem.answer.labelId !== answerItem.id ?
          {
              answer: { targetId: userAnswerItem.answer.targetId, labelId: answerItem.id },
              answerItem: answerItem
          }
          : userAnswerItem
        )
    }
  );

export const removeAnswer = (state, { targetId }) =>
  state.merge(
    {
        userAnswer: state.userAnswer.filter((userAnswerItem) =>
          userAnswerItem.answer.targetId !== targetId
        )
    }
  );



export const reducer = createReducer(INITIAL_STATE, {
    [Types.ADD_ANSWER]: addAnswer,
    [Types.REPLACE_ANSWER]: replaceAnswer,
    [Types.REMOVE_ANSWER]: removeAnswer
});