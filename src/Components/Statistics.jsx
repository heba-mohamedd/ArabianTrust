import { motion } from "framer-motion";
import { FaSquare } from "react-icons/fa";

export default function Statistics() {
  const stats = [
    {
      id: 1,
      value: "100",
      label: "مشاريع متعددة القطاعات",
      pos: "top-[40%] right-[40%] md:right-[43%]",
    },
    {
      id: 2,
      value: "100",
      label: "مشاريع متعددة القطاعات",
      pos: "top-[25%] right-[10%] md:right-[15%]",
    },
    {
      id: 3,
      value: "100",
      label: "مشاريع متعددة القطاعات",
      pos: "top-[55%] right-[70%] md:right-[75%]",
    },
  ];

  return (
    <section className="relative w-full  mx-auto" dir="rtl">
      <img
        src="src/assets/WhatsApp Image 2026-01-07 at 10.32.14 AM.jpeg"
        alt="Background Grid"
        className="w-full h-auto opacity-80"
      />

      <div className="absolute inset-0">
        {stats.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`absolute flex flex-col md:flex-row items-center md:items-start gap-2 text-white ${item.pos}`}
          >
            <div className="flex justify-between items-center gap-5 ">
              <FaSquare
                size={15}
                className="text-[#20C766] text-[10px] mt-2 md:mt-4 shadow-[0_0_10px_#20C766]"
              />

              <div className="flex flex-col items-center ">
                <span className="text-lg md:text-2xl font-bold text-white/80">
                  +
                </span>
                <span className="text-xl md:text-3xl font-bold leading-none">
                  {item.value}
                </span>
              </div>

              <p className="text-[10px] md:text-lg font-medium whitespace-nowrap text-white/90 mt-1">
                {item.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
