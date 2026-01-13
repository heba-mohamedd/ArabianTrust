import React from "react";
import { motion } from "framer-motion";
import Title from "../Components/ui/Title";
import Header from "./../Components/ui/Header";
import AboutUsIamge from "../assets/Group 21.png";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import FeatureCard from "../Components/FeatureCard.jsx";
import { LuMessageSquareMore, LuMessagesSquare } from "react-icons/lu";
import ImageDivider from "../assets/Group 1 (1).png";
import bottomImge from "../assets/bottomImage.png";
import ModernProcess from "../Components/ModernProcess.jsx";
export default function AboutUs() {
  return (
    <motion.section
      dir="rtl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center"
    >
      <Title title="من نحن" />

      <div className="container  max-w-7xl mx-auto px-4">
        <div className="my-8">
          <Header
            title="من نحن - تعرف على الكيان"
            description="تأسست الشركة لتكون كيانًا مهنيًا يقدم حلولًا متكاملة في عدد من القطاعات الحيوية، مع الالتزام بتطبيق أعلى المعايير التشغيلية والإدارية، وتقديم خدمات تلبي احتياجات الجهات الحكومية والشركات الكبرى."
          />
          <div>
            <img src={AboutUsIamge} alt="AboutUsIamge" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
          <FeatureCard
            title="رؤيتنا"
            description="أن نكون شريكًا موثوقًا في إدارة وتشغيل القطاعات الحيوية على مستوى المملكة."
            cardColor="bg-primary/5"
            headerColor="bg-primary/10"
            icon={<MdOutlineRemoveRedEye size={30} color="#00963F" />}
          />

          <FeatureCard
            title="رسالتنا"
            description="تقديم حلول تشغيلية متكاملة تحقق الكفاءة والاستدامة وتلتزم بالأنظمة والمعايير المعتمدة."
            cardColor="bg-neutral/20"
            headerColor="bg-neutral/30"
            icon={<LuMessageSquareMore size={30} />}
          />

          <FeatureCard
            title="قيمنا"
            description={`الجودة
الالتزام
الشفافية`}
            cardColor="bg-neutral/10"
            headerColor="bg-neutral/20"
            icon={<LuMessageSquareMore size={30} />}
          />
        </div>
        <div className="my-7">
          <Header
            title="نموذج عملنا"
            description="نعتمد على نموذج تشغيلي موحد يتيح لنا إدارة قطاعات متعددة بكفاءة عالية، من خلال إدارة مركزية وفرق متخصصة لكل قطاع، مع تطبيق إجراءات تشغيل قياسية ومؤشرات أداء واضحة."
            titleColor="text-black"
          />
          <ModernProcess />
        </div>
      </div>
      <div className="w-full">
        <img src={bottomImge} alt="imege" className="w-full mb-15" />
      </div>
    </motion.section>
  );
}
