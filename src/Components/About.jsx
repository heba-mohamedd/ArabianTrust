import React from "react";
import { motion } from "framer-motion";
import Image from "../assets/c142ba00b5a85693796f1962ee5405f314913329.jpg";

export default function About() {
  // إعدادات ظهور العناصر (Animations)
  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="py-16  overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="text-right"
          >
            <h2 className="text-[#00963F] text-3xl font-bold mb-6">نبذة عنا</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              شركة سعودية متخصصة في تقديم حلول متكاملة تشمل إدارة المرافق، تكامل
              الأنظمة، والتشغيل والصيانة، نعمل على دعم الجهات الحكومية والقطاع
              الخاص من خلال منظومة تشغيل ذكية، آمنة، ومستدامة.
            </p>

            <ul className="space-y-4">
              {[
                "خبرات متعددة القطاعات",
                "الالتزام بالمعايير والأنظمة السعودية",
                "حلول تشغيل متكاملة",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center gap-3 text-gray-800 font-medium text-lg"
                >
                  <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="relative"
          >
            <div className="relative h-[500px] w-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src={Image}
                alt="About Thibat"
                className="w-full h-auto object-cover"
              />

              <div className="absolute bottom-0 right-0 w-25 h-25 bg-white rounded-tl-[3rem] flex items-center justify-center">
                <div className="w-15 h-15 bg-[#00963F] text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
