import { useSelector, useDispatch } from 'react-redux'
import { filterContacts } from '../../redux/filtersSlice'
import css from './SearchBar.module.css'

export default function SearchBar() {
  const value = useSelector(state => state.filterr);
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch(filterContacts(event.target.value));
  }

  return (
    <div className={css.wrap}>
      <p>Find contacts by name</p>
      <input type="text"
        className={css.input}
        value={value}
        onChange={handleSearch} />
    </div>
  )
}