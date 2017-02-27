import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';
import './css/style.css';
import './css/bootstrap.css';

function mapStateToProps(state) {
  return {
    page: state.page,
    photos: state.photos
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
