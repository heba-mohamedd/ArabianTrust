import { useState, useEffect, useRef } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  MarkerType,
  Handle,
  Position,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaVideo,
  FaGears,
  FaDesktop,
  FaLightbulb,
  FaHeadset,
  FaShieldHalved,
  FaNetworkWired,
  FaArrowDown,
} from "react-icons/fa6";
import { ReactFlowProvider, useReactFlow } from "reactflow";

// System data
const systemsData = [
  {
    id: "sys-1",
    label: "أنظمة إدارة المباني",
    icon: FaBuilding,
    color: "from-blue-500 to-blue-600",
    borderColor: "border-blue-200",
  },
  {
    id: "sys-2",
    label: "الأنظمة الصوتية والمرئية",
    icon: FaDesktop,
    color: "from-purple-500 to-purple-600",
    borderColor: "border-purple-200",
  },
  {
    id: "sys-3",
    label: "أنظمة المراقبة والكاميرات",
    icon: FaVideo,
    color: "from-red-500 to-red-600",
    borderColor: "border-red-200",
  },
  {
    id: "sys-4",
    label: "الحلول الذكية",
    icon: FaLightbulb,
    color: "from-yellow-500 to-yellow-600",
    borderColor: "border-yellow-200",
  },
  {
    id: "sys-5",
    label: "أنظمة التحكم",
    icon: FaGears,
    color: "from-teal-500 to-teal-600",
    borderColor: "border-teal-200",
  },
  {
    id: "sys-6",
    label: "خدمات الإدارة والدعم التقني",
    icon: FaHeadset,
    color: "from-indigo-500 to-indigo-600",
    borderColor: "border-indigo-200",
  },
  {
    id: "sys-7",
    label: "مراكز القيادة الأمنية الموحدة",
    icon: FaShieldHalved,
    color: "from-emerald-500 to-emerald-600",
    borderColor: "border-emerald-200",
  },
];

// Mobile View Component - Vertical Layout
const MobileView = () => {
  return (
    <div className="w-full py-8 px-4 bg-transparent">
      <div className="max-w-md mx-auto space-y-4">
        {/* Central Hub */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-500 rounded-2xl p-6 shadow-xl">
            <div className="text-center text-white">
              <FaNetworkWired className="text-4xl mx-auto mb-3 drop-shadow-lg" />
              <h3 className="text-xl font-black mb-1">مركز التكامل</h3>
              <p className="text-sm font-semibold opacity-90">
                Integration Hub
              </p>
            </div>
          </div>
        </motion.div>

        {/* Arrow Down */}
        <div className="flex justify-center">
          <FaArrowDown className="text-2xl text-emerald-500 animate-bounce" />
        </div>

        {/* Systems List */}
        <div className="space-y-3">
          {systemsData.map((system, index) => {
            const Icon = system.icon;
            return (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <div
                  className={`bg-white border-2 ${system.borderColor} rounded-xl p-4 shadow-md active:scale-95 transition-transform`}
                >
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${system.color} flex-shrink-0`}
                    >
                      <Icon className="text-2xl text-white" />
                    </div>

                    {/* Label */}
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-gray-800 leading-snug">
                        {system.label}
                      </h4>
                    </div>

                    {/* Status */}
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${system.color} animate-pulse flex-shrink-0`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Desktop View Component - React Flow
const DesktopView = () => {
  const { fitView } = useReactFlow();
  const didFitRef = useRef(false);

  useEffect(() => {
    // هيشتغل مرة واحدة بس في البداية ومش هيشتغل تاني أبداً
    if (!didFitRef.current) {
      const timer = setTimeout(() => {
        fitView({
          padding: 0.15,
          includeHiddenNodes: false,
          duration: 400,
          minZoom: 0.7,
          maxZoom: 0.7,
        });
        didFitRef.current = true;
      }, 150);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // مصفوفة فاضية = مش هيتنفذ غير مرة واحدة
  // 1. تحديث الـ initialEdges لتكون باللون الرمادي وبدون انحناءات معقدة
  const initialEdges = systemsData.map((system, index) => ({
    id: `edge-hub-${system.id}`,
    source: "hub",
    sourceHandle: `handle-${index}`,
    target: system.id,
    // تغيير النوع إلى straight لضمان خروج الخط من النقطة للمركز مباشرة
    type: "smoothstep",
    animated: false, // يفضل إيقاف الحركة لتبدو أكثر رسمية، أو اتركها true إذا رغبت
    style: {
      stroke: "#E5E7EB", // لون رمادي فاتح جداً (Light Gray)
      strokeWidth: 2,
    },
    // قمت بإزالة markerEnd ليكون الخط متصل بحد الدائرة مباشرة كما طلبت
  }));

  // 2. تعديل الـ SystemNode للتأكد من استقبال الربط في أقرب نقطة
  const SystemNode = ({ data }) => {
    const getTargetPosition = () => {
      const angle = data.angle;
      // حساب اتجاه الـ Handle بناءً على زاوية العقدة بالنسبة للمركز
      if (angle >= -45 && angle < 45) return Position.Left;
      if (angle >= 45 && angle < 135) return Position.Top;
      if (angle >= 135 || angle < -135) return Position.Right;
      return Position.Bottom;
    };

    return (
      <div className="relative group">
        {/* الـ Handle هنا يستقبل الخط القادم من المركز */}
        <Handle
          type="target"
          position={getTargetPosition()}
          style={{ background: "transparent", border: "none" }}
        />
        <div
          className={`relative bg-white border-2 ${data.borderColor} rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 min-w-[180px] max-w-[200px]`}
        >
          <h4 className="text-sm font-bold text-gray-800 text-center leading-snug mb-3">
            {data.label}
          </h4>
        </div>
      </div>
    );
  };
  // Custom Node Component for Central Hub - Hollow Circle
  const HubNode = () => {
    // Create handles around the circle perimeter
    const handleCount = systemsData.length;
    const handles = [];

    for (let i = 0; i < handleCount; i++) {
      const angle = (i * 360) / handleCount - 90; // Same as node positioning
      const rad = (angle * Math.PI) / 180;

      // الدائرة عرضها 128px (w-32) + border 4px على كل جانب
      // نصف القطر الداخلي = 64px
      // نصف القطر الخارجي (مع البوردر) = 64 + 4 = 68px
      // نضيف 2px مسافة أمان عشان الخطوط تكون برة الدائرة خالص
      const outerRadius = 70;

      const x = 64 + outerRadius * Math.cos(rad); // 64 = مركز الدائرة في الـ container
      const y = 64 + outerRadius * Math.sin(rad);

      handles.push(
        <Handle
          key={`handle-${i}`}
          type="source"
          position={Position.Top}
          id={`handle-${i}`}
          style={{
            left: `${x}px`,
            top: `${y}px`,
            background: "transparent",
            border: "none",
          }}
        />
      );
    }

    return (
      <div className="relative">
        {handles}
        {/* Hollow Circle */}
        <div className="relative w-32 h-32 rounded-full border-4 border-primary bg-[#F7F7F7] shadow-2xl"></div>
      </div>
    );
  };

  const nodeTypes = {
    systemNode: SystemNode,
    hubNode: HubNode,
  };

  // Calculate circular positions
  const getCircularPosition = (index, total, radius = 300) => {
    const angle = (index * 360) / total - 90;
    const rad = (angle * Math.PI) / 180;
    return {
      x: 700 + radius * Math.cos(rad), // زودت 100 بكسل لليمين
      y: 350 + radius * Math.sin(rad),
    };
  };

  // Create nodes
  const initialNodes = [
    {
      id: "hub",
      type: "hubNode",
      position: { x: 750, y: 300 }, // محرك لليمين 100 بكسل
      data: {},
      draggable: false,
    },
    ...systemsData.map((system, index) => {
      const pos = getCircularPosition(index, systemsData.length);
      const angle = (index * 360) / systemsData.length - 90;
      return {
        id: system.id,
        type: "systemNode",
        position: pos,
        data: { ...system, angle },
        draggable: false,
        selectable: false,
      };
    }),
  ];
  const [nodes] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);

  return (
    <div className="w-full h-[600px] bg-transparent rounded-3xl overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        minZoom={0.8}
        maxZoom={0.8}
        defaultZoom={0.8}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling
        proOptions={{ hideAttribution: true }}
      >
        <defs>
          <linearGradient id="edge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </ReactFlow>
    </div>
  );
};

// Main Component with Responsive Detection
const GraphFlow = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div dir="rtl">
      {isMobile ? (
        <MobileView />
      ) : (
        <ReactFlowProvider>
          <DesktopView />
        </ReactFlowProvider>
      )}
    </div>
  );
};

export default GraphFlow;
