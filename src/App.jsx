import react from 'react';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';

function App() {
  const [items, setItems] = react.useState([]);
  const [cartItems, setcartItems] = react.useState([]);
  const [cartOpened, setCartOpened] = react.useState(false);

  react.useEffect(() => {
    fetch('https://6681676404acc3545a0698ae.mockapi.io/Items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find((isExist) => +isExist.id === +obj.id)) {
      setcartItems((state) => state.filter((item) => +item.id !== +obj.id));
    } else {
      setcartItems((prev) => [...prev, obj]);
    }
  };

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="top_body">
          <h1>Все товары</h1>
          <div className="search-block">
            <img src="/pic/search.svg" />
            <input placeholder="Поиск..." type="text" />
          </div>
        </div>
        <div className="snaekers">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => alert('Добавили в избранное')}
              onPlus={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
