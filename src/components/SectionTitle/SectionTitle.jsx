import "./SectionTitle.css";

const SectionTitle = ({ heading, subHeading, textColor }) => {
  return (
    <div className={`flex flex-col justify-center items-center mb-10 md:w-sm w-xs mx-auto`}>
      <p className="text-md text-amber-500 -mb-2">---{subHeading}---</p>
      <div className="divider px-2.25"></div>
      <h1 className={`text-3xl md:text-4xl font-medium uppercase -mt-3 ${textColor}`}>{heading}</h1>
      <div className={`divider px-2.5`}></div>
    </div>
  );
};

export default SectionTitle;
