function Item(props) {
  return (
      <div className="item">
        <li>{props.item}</li>
        <button 
            onClick={() => props.remove(props.id)}
            className="item--remove"
        >
          ✖
        </button>
      </div>
  )
}

export default Item