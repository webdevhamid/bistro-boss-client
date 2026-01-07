const FeaturedTitle = ({ heading, bgColor = "bg-white text-base-content" }) => {
  return (
    <div className="pt-10 pb-20">
      <div className="bg-[url(../src/assets/home/chef-service.jpg)] bg-cover bg-no-repeat bg-center bg-fixed text-white p-10 md:p-20 text-center md:space-y-4 space-y-1">
        <div className={`${bgColor} mx-auto  p-5 md:p-20`}>
          <h1 className="text-3xl md:text-5xl font-medium mb-3">{heading}</h1>
          <p className="md:text-sm text-[12]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum incidunt, ipsam rem qui
            ullam quas reiciendis delectus assumenda laudantium consequatur molestias, quibusdam
            laboriosam quidem cupiditate et deserunt rerum
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTitle;
