import Immutable from 'seamless-immutable';
import { createReducer, createActions } from 'reduxsauce';

export const INITIAL_STATE = Immutable({
    answer: [],
    dragObjects: []
});

const { Types, Creators } = createActions({
    addUserAnswer: ['targetId', 'labelId'],
    addDragObject: [ 'dragObject']
});

export const UserUanserTypes = Types;
export default Creators;

export const addUserAnswer = (state, { targetId, labelId }) =>
  state.merge(
    state.answer.some((answerItem) => (answerItem.targetId === targetId && answerItem.labelId === labelId)) ?
      {
          answer: [
              ...state.answer,
          ]
      }
      :
      {
          answer: [
              ...state.answer,
              { targetId: targetId, labelId: labelId }
          ]
      }
  );

export const addDragObject = (state, { dragObject }) =>
  state.merge(
    state.dragObjects.some((dragItem) => dragItem.id === dragObject.id) ?
      {
          dragObjects: [
              ...state.dragObjects,
          ]
      }
      :
      {
          dragObjects: [
              ...state.dragObjects,
              dragObject
          ]
      }
  );

export const reducer = createReducer(INITIAL_STATE, {
    [Types.ADD_USER_ANSWER]: addUserAnswer,
    [Types.ADD_DRAG_OBJECT]: addDragObject
});