import Logo from './Logo';
import MenuItem from './MenuItem';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="bg-white border-b border-gray-300">
      <div className="container mx-auto px-4 flex items-center h-20 justify-between">
        <div className="flex items-center">
          <Logo />
          <div className="flex space-x-4 ml-10">
            <MenuItem href="Libros" text="Productos" />
            <MenuItem href="#Kits" text="Testimonios" />
            <MenuItem href="#Velas" text="Nosotros" />
            <MenuItem href="#Ropa" text="Blog" />
          </div>
        </div>
        <div className="flex items-center mr-10">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
