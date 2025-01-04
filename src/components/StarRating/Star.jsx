const Star = ({ data, handleSelected }) => {

    const { id, isSelected } = data;

    return (
        <i className={`fa-solid fa-star fa-2xl ${ isSelected ? "star-selected" : ""}`} onClick={() => handleSelected(id)}></i>
    )
}

export default Star
