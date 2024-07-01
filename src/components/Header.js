function Header(props) {
  return (
    <header>
      <div className="headerLeft">
        <img src="/pic/logo.png" alt="logo" height={40} width={40} />
        <div className="header_left_name">
          <h3>React sneakers</h3>
          <p>Магазин крутых кросовок</p>
        </div>
      </div>
      <ul className="headerRight">
        <li onClick={props.onClickCart}>
          <img src="/pic/cart.svg" height={20} width={20} />
          <span>1205 руб.</span>
        </li>
        <li>
          <img src="/pic/user.svg" height={20} width={20} />
        </li>
      </ul>
    </header>
  );
}
export default Header;
