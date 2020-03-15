import { connect } from 'react-redux';
import AddPresentation from './../presentational/AddPresentation';
import { addReq } from './../../actions/addAction';


const mapStateToProps = state => {
  return {

  }
};


const mapDispatchToProps = dispatch => {
  return {
    onSubmit: d => {
      dispatch(addReq(d));
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPresentation);