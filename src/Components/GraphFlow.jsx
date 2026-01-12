import flowImage from "../assets/Group 427320856.png";

const graphData = [
  {
    data: "الأنظمة الصوتية والمرئية",
    pos: { top: 108, left: 703 },
  },
  {
    data: "الحلول الذكية",
    pos: { top: 300, left: 662 },
  },
  {
    data: "مراكز القيادة الأمنية الموحدة",
    pos: { top: 470, left: 505 },
  },
  {
    data: "خدمات الإدارة والدعم التقني",
    pos: { top: 470, left: 200 },
  },
  {
    data: "أنظمة إدارة المباني",
    pos: { top: 330, left: 90 },
  },
  {
    data: "أنظمة المراقبة والكاميرات",
    pos: { top: 175, left: 0 },
  },
  {
    data: "أنظمة التحكم",
    pos: { top: 50, left: 130 },
  },
];

function TextInBox({ data, pos }) {
  return (
    <p
      className="absolute p-2 bg-neutral-200 border border-neutral rounded-lg text-dark-grey text-sm"
      style={{
        top: pos.top,
        left: pos.left,
      }}
    >
      {data}
    </p>
  );
}

export default function GraphFlow() {
  return (
    <div className="relative mx-auto w-[80%]  ">
      {/* Image wrapper */}
      <div className="flex justify-center ">
        <img
          src={flowImage}
          alt="flowimage"
          className="w-[60%] h-auto  my-20"
        />
      </div>

      {/* Text boxes */}
      {graphData.map((item, index) => (
        <TextInBox key={index} data={item.data} pos={item.pos} />
      ))}
    </div>
  );
}
