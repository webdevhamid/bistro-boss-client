const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;

  return (
    <div className="flex gap-3 md:gap-5 items-center">
      <img
        src={image}
        alt="name"
        className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden rounded-tl-none object-cover"
      />

      <div className="flex-1">
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
