import * as yup from "yup";

export const requestQuoteSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("الاسم بالكامل مطلوب")
    .min(3, "يجب أن يكون الاسم 3 أحرف على الأقل"),

  companyName: yup.string().required("اسم الجهة أو الشراكة مطلوب"),

  phone: yup
    .string()
    .required("رقم الهاتف مطلوب")
    .matches(/^[0-9]+$/, "يجب إدخال أرقام فقط")
    .min(10, "رقم الهاتف غير صالح"),

  email: yup
    .string()
    .required("البريد الإلكتروني مطلوب")
    .email("صيغة البريد الإلكتروني غير صحيحة"),

  serviceType: yup.string().required("يرجى اختيار نوع الخدمة"),

  budget: yup.string().required("يرجى اختيار الميزانية التقديرية"),

  projectDescription: yup
    .string()
    .required("وصف المشروع مطلوب")
    .min(20, "يرجى كتابة وصف أكثر تفصيلاً (20 حرف على الأقل)"),
});
