import { Link } from 'react-router-dom';
import Logo from '../Logo';
import CartWidget from './CartWidget'; // Asegúrate de que la ruta sea correcta

const NavBar = () => {
  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4 lg:px-8 flex items-center h-20 justify-between">
        <div className="flex items-center">
          <Link to="/">
            <Logo />
          </Link>
          <div className="flex space-x-6 ml-10 text-base">
            <Link to="/categoria/libros" className='text-gray-800 hover:text-primary hover:transition duration-300'>Libros</Link>
            <Link to="/categoria/kits" className='text-gray-800 hover:text-primary hover:transition duration-300'>Kits</Link>
            <Link to="/categoria/accesorios" className='text-gray-800 hover:text-primary hover:transition duration-300'>Accesorios</Link>
            <Link to="/categoria/alimentacion" className='text-gray-800 hover:text-primary hover:transition duration-300'>Alimentación Sana</Link>
          </div>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
