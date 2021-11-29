import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import { removeService, editService, cancelService } from '../actions/actionCreators';

const ServiceList = () => {
  const items = useSelector(state => state.serviceList.items);
  const filteredItems = useSelector(state => state.serviceList.filtered);
  const filterValue = useSelector(state => state.serviceList.value);

  const dispatch = useDispatch();

  const actualItems = filterValue ? filteredItems : items;

  const handleRemove = id => {
    dispatch(removeService(id));
    dispatch(cancelService());
  }

  const handleEdit = (id, name, price) => {
    dispatch(editService(id, name, price));
  }

  return (
    <ul>
      {actualItems.map(o => <li key={o.id}>
        {o.name} {o.price}
        <button onClick={() => handleEdit(o.id, o.name, o.price)}>✎</button>
        <button onClick={() => handleRemove(o.id)}>✕</button>
      </li>)}
    </ul>
  )
}

export default ServiceList;