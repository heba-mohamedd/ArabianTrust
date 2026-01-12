import React from "react";
import { motion } from "framer-motion";

import Header from "./ui/Header";
import { logos } from "../data/data";

const Clients = React.memo(function Clients() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className=" overflow-hidden" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center"
        >
          <Header
            title=" عملاؤنا"
            description={` فخورون بالشراكة مع مجموعة من الجهات الحكومية والخاصة، في
            مختلف القطاعات.
  `}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className=" flex flex-col mt-2"
        >
          <div className=" flex flex-wrap md:flex-row justify-around items-center md:ms-10">
            {logos.slice(0, 4).map((img, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="w-32 sm:w-40 md:w-48  lg:w-56 flex items-center justify-center"
              >
                <img
                  src={img}
                  alt={`logo-${index}`}
                  loading="lazy"
                  className="w-full h-30 md:h-24 object-contain"
                />
              </motion.div>
            ))}
          </div>
          <div className=" flex flex-wrap md:flex-row justify-around items-center md:ml-10">
            {logos.slice(4).map((img, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="w-32 sm:w-40 md:w-48 lg:w-56 flex items-center justify-center"
              >
                <img
                  src={img}
                  alt={`logo-${index}`}
                  loading="lazy"
                  className="w-full h-20 md:h-24 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default Clients;
