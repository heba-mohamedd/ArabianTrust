import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup.string().required("الاسم مطلوب"),
  phone: yup.string().required("رقم الهاتف مطلوب"),
  email: yup.string().email("بريد غير صالح").required("البريد مطلوب"),
  message: yup.string().required("الرسالة مطلوبة"),
});
