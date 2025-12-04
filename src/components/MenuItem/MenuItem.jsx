const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;

  return (
    <div className="flex gap-5 items-center">
      <img
        src={image}
        alt="name"
        className="w-[100px] h-[100px] rounded-full overflow-hidden rounded-tl-none object-cover"
      />

      <div>
        <h3 className="uppercase font-medium">{name}--------------</h3>
        <p className="text-sm text-gray-500">{recipe}</p>
      </div>
      <div>
        {/* Price */}
        <p className="text-amber-500 font-semibold">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
