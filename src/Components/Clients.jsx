import React from "react";
import { motion } from "framer-motion";

const logos = [
  "src/assets/ourClients/Logo (1).png",
  "src/assets/ourClients/Logo (2).png",
  "src/assets/ourClients/Logo (3).png",
  "src/assets/ourClients/Logo (4).png",
  "src/assets/ourClients/Logo (5).png",
  "src/assets/ourClients/Logo (6).png",
  "src/assets/ourClients/Logo (7).png",
  "src/assets/ourClients/Logo.png",
];

export default function Clients() {
  // إعدادات الحاوية الكبيرة (لتنسيق توقيت ظهور الأبناء)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // الفرق الزمني بين ظهور كل شعار والآخر
      },
    },
  };

  // إعدادات كل شعار على حدة
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* العنوان مع حركة ظهور بسيطة */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center"
        >
          <p className="text-4xl text-[#00963F] font-bold">عملاؤنا</p>
          <p className="text-gray-600 text-lg text-center py-4">
            فخورون بالشراكة مع مجموعة من الجهات الحكومية والخاصة، في <br />
            مختلف القطاعات.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center "
        >
          {logos.map((img, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
            >
              <img src={img} alt="logos" className="w-[150px] md:w-[250px] " />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
