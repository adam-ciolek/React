import shortid from 'shortid';

// selectors

export const getCardsForColumn = ({cards}, columnId) => (cards.filter(card => card.columnId == columnId ));

export const getCardsForAllList = ({cards, searchString}) => cards.filter(card => 
  new RegExp(searchString, 'i').test(card.title));

// export const getCardsForAllList = ({cards, searchString}) => cards.filter(card => 
//   card.title.indexOf(searchString.value) !== -1 ? card.style.display = 'block' : card.style.display = 'none');

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