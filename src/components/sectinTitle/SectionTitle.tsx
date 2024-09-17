

type TTitleProps = {
  title: string;
  description: string;
};

const SectionTitle = ({ title, description }: TTitleProps) => {
  return (
    <div className="mx-auto w-full xl:w-[60%] md:w-[80%] text-center">
      <h1 className="md:text-4xl text-2xl font-semibold">{title}</h1>
      <p className="md:text-lg text-sm text-gray-500 w-full md:w-[70%] mx-auto mt-4 md:mt-7">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
