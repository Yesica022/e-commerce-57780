import { Link } from 'react-router-dom';
import Logo from '../Logo';
import CartWidget from '../CartWidget';

const NavBar = () => {
  return (
    <nav className="bg-white border-b border-gray-300">
      <div className="container mx-auto px-4 flex items-center h-20 justify-between">
        <div className="flex items-center">
          <Link to="/">
            <Logo />
          </Link>
          <div className="flex space-x-4 ml-10 text-lg">
            <Link to="/categoria/libros">Libros</Link>
            <Link to="/categoria/kits">Kits</Link>
            <Link to="/categoria/plantas">Plantas</Link>
            <Link to="/categoria/aceites">Aceites</Link>
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

