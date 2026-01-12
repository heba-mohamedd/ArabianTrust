import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, ConfigProvider } from "antd";
import { MdOutlineMailOutline } from "react-icons/md"; // أيقونة البريد
import * as yup from "yup";
import PrimaryButton from "./../ui/PrimaryButton";

const newsletterSchema = yup.object().shape({
  email: yup.string().required("البريد مطلوب").email("بريد غير صحيح"),
});
export default function Newsletter() {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(newsletterSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00963F",
          borderRadius: 8,
        },
      }}
    >
      <section
        className=" relative
    bg-secondary
    py-12 px-6 mx-4 w-full
    overflow-hidden
"
        dir="rtl"
      >
        <div
          className="
      pointer-events-none
      absolute inset-y-0 left-0
      w-full
      bg-gradient-to-r
      from-[#00963F55]
      via-[#00963F22]
      to-transparent
    "
        />
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* النصوص جهة اليمين */}
          <div className="text-white text-right">
            <p className="text-2xl md:text-3xl font-bold mb-2">
              ابقَ على اطلاع
            </p>
            <p className="text-light-grey text-sm md:text-base leading-relaxed">
              اشترك ليصلك آخر المستجدات المتعلقة بخدماتنا،{" "}
              <br className="hidden md:block" />
              المشاريع، والتحديثات التشغيلية ذات الصلة.
            </p>
          </div>

          {/* حقل الإدخال والزر */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full md:w-auto flex items-center bg-[#0A1F16] rounded-xl p-1 border border-gray-800"
          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  variant="borderless"
                  placeholder="ادخل بريدك الالكتروني"
                  prefix={
                    <MdOutlineMailOutline className="text-light-grey text-xl ml-2" />
                  }
                  className="custom-input bg-transparent  w-full md:w-[300px]"
                />
              )}
            />
            <PrimaryButton text="ارسال" htmlType="submit" />
          </form>
        </div>
      </section>
    </ConfigProvider>
  );
}
