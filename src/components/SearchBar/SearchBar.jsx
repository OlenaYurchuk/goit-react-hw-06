import css from './SearchBar.module.css'

export default function SearchBar({ value, onSearch }) {
  return (
    <div className={css.wrap}>
      <p>Find contacts by name</p>
      <input type="text"
        className={css.input}
        value={value}
        onChange={(event) => onSearch(event.target.value)} />
    </div>
  )
}