
const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mx-auto mt-4 p-4 bg-blue-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-blue-700">{greeting}</h2>
    </div>
  );
}

export default ItemListContainer;
