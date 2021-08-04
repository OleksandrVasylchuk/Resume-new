import { VscSearch } from "react-icons/vsc";
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selector';
import * as actions from '../../redux/actions';
import { InputFilter, LabelFilter } from './Filter.styled'

//TOOLKIT - 2
export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = event => dispatch(actions.changeFilter(event.target.value));


  
    return (
      <LabelFilter>
        <VscSearch></VscSearch>
        Find contacts by name
        <InputFilter
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Rosie Simpson"
        />
           
            
      </LabelFilter>
    )
  
}
  
//   //REDUX - 1
// import { connect } from 'react-redux';

// const mapStateToProps = state => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: event => dispatch(actions.changeFilter(event.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);