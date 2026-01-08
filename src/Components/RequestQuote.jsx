import { Button } from "antd";
import { MdOutlinePhoneInTalk } from "react-icons/md";

export default function RequestQuote() {
  return (
    <section className="relative container mx-auto h-[250px] ">
      {" "}
      <img
        src="src/assets/Frame 40 (1).png"
        alt="Decorative"
        className="absolute inset-0 w-full h-full object-cover z-0 rounded-3xl"
      />
      {/* المحتوى */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  w-[70%] flex flex-col justify-center items-center text-white text-center  z-10"
      >
        <p className="text-2xl font-semibold">تقديم طلب عرض سعر</p>
        <p className="font-normal md:text-lg leading-relaxed my-4">
          من خلال نموذج طلب عرض السعر، يمكنكم مشاركة متطلباتكم الفنية والتشغيلية
          <br />
          ليقوم فريقنا بدراستها وإعداد عرض سعر متكامل
        </p>
        <Button
          type="primary"
          size="large"
          className="flex items-center gap-2 w-[30%] mx-auto"
          style={{ backgroundColor: "#00963F", borderColor: "#00963F" }}
        >
          طلب عرض السعر
          <MdOutlinePhoneInTalk size={20} />
        </Button>
      </div>
    </section>
  );
}
