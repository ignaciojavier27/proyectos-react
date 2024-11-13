import PropTypes from 'prop-types'

const Titulo = ({titulo}) => {
  return (
    <div className="container-title">
      <h2>{titulo}</h2>
    </div>
  )
}

export default Titulo

Titulo.propTypes = {
  titulo: PropTypes.string
}
