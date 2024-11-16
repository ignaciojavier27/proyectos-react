import PropTypes from 'prop-types';
const AccordianItem = ({item, handleSingleSelection, selected}) => {

    const { id, question, answer } = item

    return (
        <div className="item">
            <div className="title" onClick={() => handleSingleSelection(id)}>
                <h3>{question}</h3>
                <span>{selected === id ? '-' : '+'}</span>
            </div>
            {
                selected === id && (
                    <div className="content">
                        <p>{answer}</p>
                    </div>
                )
            }
        </div>
    )
}

export default AccordianItem

AccordianItem.propTypes = {
    item: PropTypes.object,
    handleSingleSelection: PropTypes.func,
    selected: PropTypes.number
}
