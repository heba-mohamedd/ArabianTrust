import bgImage from "../assets/Frame 40 (1).png";
import PrimaryButton from "./ui/PrimaryButton";
export default function RequestQuote({
  title = "",
  description,
  buttonText,
  buttonIcon,
  containerHeight = "250px",
}) {
  return (
    <section
      className="relative container mx-auto "
      style={{ height: containerHeight }}
    >
      <img
        src={bgImage}
        alt="Decorative"
        className="absolute inset-0 w-full h-full object-cover z-0 rounded-3xl"
      />

      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  w-[70%] flex flex-col justify-center items-center text-white text-center z-10"
      >
        <p className="text-2xl font-semibold">{title}</p>
        <p className="font-normal md:text-lg leading-relaxed my-4 whitespace-pre-line">
          {description}
        </p>

        <PrimaryButton text={buttonText} icon={buttonIcon} />
      </div>
    </section>
  );
}
