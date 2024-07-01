function Drawer({ onClose, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина <img src="/pic/btn-remove.svg" onClick={onClose} />
        </h2>
        <div className="items">
          {items.map((obj) => (
            <div className="cartItem">
              <div
                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                className="cartItemImg"></div>
              <div className="cartDesc">
                <p>{obj.title}</p>
                <b>{obj.price}</b>
              </div>
              <img src="/pic/btn-remove.svg" />
            </div>
          ))}
        </div>
        <div className="cartTotalBlock">
          <ul className="cart-bottom">
            <li>
              <span>Итого:</span>
              <div></div>
              <b>8 902 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>450 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/pic/arrow.svg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
