import React from "react";
import { motion } from "framer-motion";
import { Card } from "antd";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
const { Meta } = Card;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ServiseCard({ item }) {
  return (
    <Link to={`/SectorDetails/${item.id}`}>
      <motion.div
        variants={cardVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        className="w-75 "
      >
        <Card
          hoverable
          cover={<img draggable={false} alt={item.title} src={item.src} />}
          className="text-center "
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <Meta title={item.title} />
            <IoMdArrowDropdown size={35} color="#009640" />
          </div>
        </Card>
      </motion.div>
    </Link>
  );
}
