const Menu = ({ items }) => {
  return (
    <div className="section">
      {items.map((item) => (
        <div className="container">
          <div className="img-container">
            <img src={item.img} alt="image" />
          </div>
          <div className="data-container">
            <div className="title-container">
              <h4> {item.title}</h4>
              <p className="price"> $ {item.price}</p>
            </div>

            <p className="description">{item.desc} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
