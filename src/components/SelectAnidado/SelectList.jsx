import PropTypes from 'prop-types';
import { useFetch } from "../../hooks/useFetch"

const SelectList = ({ title, url, handleChange }) => {
  const { data, error, loading } = useFetch(url);

  if(!data || error) return null;

  let id = `select-${title}`
  let options = data.response[title.toLowerCase()];
  console.log(options)

  return (
    <div>
      <label htmlFor={id}>{title}: </label>
      { loading && <p>Cargando...</p> }
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige un {title.toLowerCase()}</option>
        { data && options.map( item => <option key={item} value={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default SelectList;

SelectList.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  handleChange: PropTypes.func
}
