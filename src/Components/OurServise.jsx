import React from "react";
import { motion } from "framer-motion";
import { Card } from "antd";
import { Typography } from "antd";
import ServiseCard from "./ui/ServiseCard";
const { Title } = Typography;

const service = [
  {
    id: 1,
    src: "src/assets/Frame 11.png",
    title: "قطـاع صيانة وتشغيل محطات التحلية",
  },
  {
    id: 2,
    src: "src/assets/Frame 11 (2).png",
    title: "قطـاع صيانة وتشغيل محطات التحلية",
  },
  {
    id: 3,
    src: "src/assets/Frame 11.png",
    title: "قطـاع صيانة وتشغيل محطات التحلية",
  },
];

// Variants للـ Framer Motion
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function OurService() {
  return (
    <section className="py-16 overflow-hidden mx-auto" dir="rtl">
      <div className=" flex flex-col justify-center items-center">
        <Title level={2}>القطاعات التي نخدمها</Title>
        <p className="text-gray-700 text-lg text-center py-4">
          نقدم حلولنا لعدة قطاعات حيوية، مع مراعاة متطلبات التشغيل والأنظمة
          <br />
          الخاصة بكل قطاع.
        </p>
      </div>
      <div className="container mx-auto lg:px-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {service.map((item) => (
            <ServiseCard item={item} key={item.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
