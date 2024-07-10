import Item from "../ItemListContainer/Item";

const RelatedProducts = ({ relatedProducts }) => {
  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 text-span">Productos relacionados</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {relatedProducts.map((product) => (
          <div key={product.id} >
            <Item product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;



