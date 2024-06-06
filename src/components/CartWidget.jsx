const CartWidget = () => {
  const itemCount = 3; // Número hardcodeado (puedes cambiarlo según necesites)

  return (
    <div className="cart-widget">
      <img src="src/img/icon-bag.svg" alt="Icono de carrito" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

export default CartWidget;
