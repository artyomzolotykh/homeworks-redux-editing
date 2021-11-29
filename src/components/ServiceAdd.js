import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService, cancelService, updateService } from '../actions/actionCreators';

const ServiceAdd = () => {
  const item = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = event => {
    const {name, value} = event.target;
    dispatch(changeServiceField(name, value));
  }

  const handleSubmit = event => {
    event.preventDefault();
    item.editting ?
      dispatch(updateService(item.editting, item.name, item.price)) :
      dispatch(addService(item.name, item.price));
    dispatch(cancelService());
  }

  const handleCancel = event => {
    event.preventDefault();
    dispatch(cancelService());
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} value={item.name} />
      <input name="price" onChange={handleChange} value={item.price} />
      <button type="submit">Save</button>
      {item.editting && <button onClick={handleCancel}>Cancel</button> }
    </form>
  )
}

export default ServiceAdd;