const RecommendedItem = ({ item }) => {
  const {name, image, recipe} = item;

  return <div className="card bg-stone-100 rounded-none shadow-none">
  <figure className="">
    <img
      src={image}
      alt={name}
      className="w-full object-cover h-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold">{name}</h2>
    <p className="text-sm text-gray-600 font-normal">{recipe}</p>
    <div className="card-actions mt-4">
      <button className="btn btn-outline bg-amber-50 px-8 border-b-2 border-amber-500 border-0 uppercase hover:bg-black hover:text-white hover:border-b-transparent">Add to Cart</button>
    </div>
  </div>
</div>;
};

export default RecommendedItem;
