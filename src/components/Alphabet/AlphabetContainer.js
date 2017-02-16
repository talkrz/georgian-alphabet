import { connect } from 'react-redux';
import Alphabet from './Alphabet';

const mapStateToProps = state => (
  {
    alphabet: state.alphabet.alphabetDefinition,
  }
);

const AlphabetContainer = connect(mapStateToProps)(Alphabet);

export default AlphabetContainer;
