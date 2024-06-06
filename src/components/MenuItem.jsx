const MenuItem = ({ href, text }) => {
  return (
    <a href={href} className="text-gray-700 hover:text-primary">
      {text}
    </a>
  );
}

export default MenuItem;