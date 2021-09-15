import React, { useCallback } from "react";
import "./style.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input, Button, Typography } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import logoSignIn from "../../assets/logoSignIn.png";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SignUpAction } from "../../Store/actions/userActions";
const { Text } = Typography;

const validationSchema = Yup.object().shape({
  taiKhoan: Yup.string().required("Username is invalid!"),
  matKhau: Yup.string()
    .required("PassWord is invalid!")
    .min(6, "PassWord must have min 6 characters")
    .max(32, "PassWord have max 32 characters"),
  email: Yup.string().required("Email is required!").email("Email is invalid!"),
  soDt: Yup.string()
    .required("Phone number is required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Invalid phone number"
    )
    .min(8, "Phone must have mon 8 number"),
  hoTen: Yup.string().required("FullName is required!"),
});
function SignUp(props) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      hoTen: "",
      maNhom: "GP01",
    },
    validationSchema,
    validateOnMount: true,
  });
   const goToHome = () => {
     props.history.push("/");
   };

  // set tất cả các input là touched khi submit
  // để khi người dùng chưa nhập gì mà submit
  //sẽ thỏa điều kiện hiện error
  const setAllTouched = useCallback(() => {
    Object.keys(formik.values).forEach((key) => {
      formik.setFieldTouched(key);
    });
  }, [formik]);
  // console.log(formik);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllTouched();
    if (!formik.isValid) return;
    dispatch(SignUpAction(formik.values, goToHome));
  };

  return (
    <>
      <form
        className="signIn-form sm:container rounded-lg"
        onSubmit={handleSubmit}>
        <NavLink to="/">
          <img className="logoLogin" src={logoSignIn} alt="logo" />
        </NavLink>
        <NavLink to="/" exact className="btnClose text-center">
          <CloseOutlined />
        </NavLink>
        <div className="mb-2">
          <Text className="text-white" strong>
            FullName:
          </Text>
          <Input
            name="hoTen"
            size="large"
            prefix={<UserOutlined />}
            value={formik.values.hoTen}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.hoTen && (
            <span className="text-red-500">{formik.errors.hoTen}</span>
          )}
        </div>
        <div className="mb-2">
          <Text className="text-white" strong>
            Username:
          </Text>
          <Input
            name="taiKhoan"
            size="large"
            prefix={<UserOutlined />}
            value={formik.values.taiKhoan}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.taiKhoan && (
            <span className="text-red-500">{formik.errors.taiKhoan}</span>
          )}
        </div>
        <div className="mb-2">
          <Text className="text-white" strong>
            Password:
          </Text>
          <Input.Password
            name="matKhau"
            size="large"
            prefix={<LockOutlined />}
            value={formik.values.matKhau}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.matKhau && (
            <span className="text-red-500">{formik.errors.matKhau}</span>
          )}
        </div>
        <div className="mb-2">
          <Text className="text-white" strong>
            Email:
          </Text>
          <Input
            name="email"
            size="large"
            prefix={<MailOutlined />}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && (
            <span className="text-red-500">{formik.errors.email}</span>
          )}
        </div>
        <div className="mb-2">
          <Text className="text-white" strong>
            Phone:
          </Text>
          <Input
            name="soDt"
            size="large"
            prefix={<PhoneOutlined />}
            value={formik.values.soDt}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.soDt && (
            <span className="text-red-500">{formik.errors.soDt}</span>
          )}
        </div>

        <Button
          className="btnLogin my-3"
          htmlType="submit"
          type="primary"
          block>
          Sign Up
        </Button>
      </form>
    </>
  );
}

export default SignUp;
