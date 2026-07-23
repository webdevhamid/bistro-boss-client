const BlurrySectionTItle = ({ imgURL, title, desc }) => {
  return (
    <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen font-section">
      <div
        className="hero min-h-[500px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${imgURL}")`,
        }}
      >
        <div className="bg-transparent/50"></div>
        <div className="hero-content w-2/3 text-white text-3xl text-center">
          <div className="bg-black/40 w-full p-20">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlurrySectionTItle;
