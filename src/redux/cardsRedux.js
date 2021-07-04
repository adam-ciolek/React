import shortid from 'shortid';

// selectors

export const getCardsForColumn = ({cards, searchString}, columnId) => (
  cards.filter(card => card.columnId == columnId && RegExp(searchString, 'i').test(card.title)
  ));


// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARDS');

// action creators
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });

// reducer
export default function reducerCard(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}