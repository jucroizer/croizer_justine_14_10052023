function Dropdown(props) {

  return (
    <select
      className="dropdown"
      onChange={(e) => {
        props.result(e.target.value);
      }}
    >
      {props.options.map((item) => {
        return (
          <option className="dropdown-item" key={item.id}>
            {item.name}
          </option>
        );
      })}
    </select>
  );
}

export default Dropdown;
