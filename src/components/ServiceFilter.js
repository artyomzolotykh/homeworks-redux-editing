import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { filterServices } from '../actions/actionCreators';

const ServiceFilter = () => {
  const filterValue = useSelector(state => state.serviceList.value);
  const dispatch = useDispatch();

  const handleChange = event => {
    const {value} = event.target;
    dispatch(filterServices(value));
  }

  return (
    <>
      <div>Поиск...</div>
      <input name="filter" onChange={handleChange} value={filterValue} />
    </>
  )
}

export default ServiceFilter;