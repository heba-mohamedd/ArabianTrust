import { motion, AnimatePresence } from "framer-motion";
import {
  FaBuilding,
  FaVideo,
  FaGears,
  FaDesktop,
  FaLightbulb,
  FaHeadset,
  FaShieldHalved,
  FaCircleCheck,
  FaBolt,
} from "react-icons/fa6";

const services = [
  {
    id: 1,
    title: "أنظمة إدارة المباني",
    desc: "BMS & Control",
    icon: FaBuilding,
    color: "from-emerald-400 to-emerald-600",
  },
  {
    id: 2,
    title: "أنظمة المراقبة",
    desc: "Security & CCTV",
    icon: FaVideo,
    color: "from-green-400 to-green-600",
  },
  {
    id: 3,
    title: "أنظمة التحكم",
    desc: "Automation Systems",
    icon: FaGears,
    color: "from-teal-400 to-teal-600",
  },
  {
    id: 4,
    title: "الأنظمة الصوتية",
    desc: "Audio & Visual",
    icon: FaDesktop,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 5,
    title: "الحلول الذكية",
    desc: "Smart Solutions",
    icon: FaLightbulb,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 6,
    title: "الدعم التقني",
    desc: "Technical Support",
    icon: FaHeadset,
    color: "from-teal-500 to-green-500",
  },
  {
    id: 7,
    title: "القيادة الأمنية",
    desc: "Unified Command",
    icon: FaShieldHalved,
    color: "from-emerald-600 to-green-600",
  },
];

const CircuitBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    <svg className="w-full h-full" viewBox="0 0 800 800">
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
          <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle
        cx="400"
        cy="400"
        r="350"
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth="0.5"
        strokeDasharray="10 20"
      />
      <motion.path
        d="M 400 50 L 400 750 M 50 400 L 750 400 M 150 150 L 650 650 M 650 150 L 150 650"
        stroke="currentColor"
        strokeWidth="0.5"
        className="text-emerald-500"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  </div>
);

const SystemModule = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="relative group h-full"
    >
      <div className="absolute -inset-0.5 bg-linear-to-r from-emerald-500 to-green-500 rounded-2xl blur-sm opacity-0 group-hover:opacity-20 transition duration-500" />

      <div className="relative h-full bg-white/80 backdrop-blur-xl border border-emerald-100/50 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
        <div className="flex items-start justify-between mb-4">
          <div
            className={`p-3 rounded-xl bg-linear-to-br ${service.color} text-white shadow-lg shadow-emerald-200/50 group-hover:scale-110 transition-transform duration-300`}
          >
            <service.icon size={24} />
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 rounded-full">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-[10px] uppercase font-bold text-emerald-600 tracking-wider">
              Active
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-emerald-700 transition-colors">
            {service.title}
          </h3>
          <p className="text-xs text-slate-500 font-medium">{service.desc}</p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[8px] font-bold text-slate-400"
              >
                0{i}
              </div>
            ))}
          </div>
          <FaBolt className="text-emerald-400 group-hover:text-emerald-600 transition-colors" />
        </div>
      </div>
    </motion.div>
  );
};

const SmartSystemMap = () => {
  return (
    <div
      className="relative w-full min-h-[800px] bg-slate-50/50 rounded-[2.5rem] border border-slate-200/60 overflow-hidden font-sans p-4 md:p-8 lg:p-12"
      dir="rtl"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-100/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-green-100/30 blur-[120px] rounded-full" />
      <CircuitBackground />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center md:text-right flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 rounded-full text-emerald-600 text-xs font-bold mb-4"
            >
              <FaBolt />
              أنظمة ذكية متكاملة
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              خريطة تكامل <br />
              <span className="text-emerald-600">الأنظمة الرقمية</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-md text-sm md:text-base leading-relaxed">
            نحن نربط الأنظمة المنفصلة لتصبح كائناً تقنياً واحداً، مما يرفع كفاءة
            التشغيل ويوفر أقصى درجات الأمان والتحكم الذكي.
          </p>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 min-h-[600px]">
          {/* Main Core / Highlights column */}
          <div className="lg:col-span-4 flex flex-col gap-6 ">
            <div className="flex-1 bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-500 text-emerald-500">
                <FaGears size={140} />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h4 className="text-emerald-400 font-bold mb-2">
                    النظام المركزي
                  </h4>
                  <p className="text-2xl font-black mb-4 uppercase tracking-tighter">
                    Unified Hub 01
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    تكامل سلس لجميع المرافق تحت منصة واحدة تدعم الذكاء الاصطناعي
                    والتحليل الفوري.
                  </p>
                </div>
                <button className="mt-8 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-xl transition-all self-start flex items-center gap-2 shadow-lg shadow-emerald-500/20">
                  <FaCircleCheck />
                  استكشاف النظام
                </button>
              </div>
            </div>

            <div className="hidden lg:block">
              <SystemModule service={services[0]} index={0} />
            </div>
          </div>

          {/* Secondary Modules Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.slice(1).map((service, index) => (
              <SystemModule
                key={service.id}
                service={service}
                index={index + 1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Branding */}
      <div className="absolute bottom-6 right-12 opacity-5 pointer-events-none">
        <span className="text-9xl font-black tracking-tighter">
          INTEGRATION
        </span>
      </div>
    </div>
  );
};

export default SmartSystemMap;
