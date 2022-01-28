import { object, string, number, date, InferType } from 'yup';

let userSchema = object({
  firstName: string().required("Adınızı Giriniz"),
  lastName: string().required("Soyadınızı Giriniz"),
  age: number("Rakam giriniz").required("Yaşınızı giriniz").positive("Pozitif rakam giriniz").integer("Tamsayı giriniz"),
  idNO: number("Rakam giriniz").required("TC Kimliğinizi giriniz").positive("Pozitif rakam giriniz").integer("Tamsayı giriniz"),
  email: string().email("Geçerli bir email giriniz").required("Email giriniz"),
  address: string().required("Adres giriniz"),
  subject: string().required("Başvuru konusu giriniz"),
  applicationReason: string().required("Başvuru nedeni giriniz"),
});

let loginSchema = object({
  userName: string().required("Kullanıcı Adınızı Giriniz"),
  password: string().required("Şifrenizi Giriniz"),
});


export {userSchema,loginSchema};