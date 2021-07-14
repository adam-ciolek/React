import {connect} from 'react-redux';
import SearchResult from './SearchResult';
import { getCardsFormAllLists } from '../../redux/cardsRedux';
import { createActionAddCard } from '../../redux/cardsRedux';


const mapStateToProps = (state, props) => ({
  cards: getCardsFormAllLists(state, props.id),
});


const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});


export default connect(mapStateToProps,mapDispatchToProps)(SearchResult);