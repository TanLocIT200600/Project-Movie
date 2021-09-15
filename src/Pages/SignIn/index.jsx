import React, { useCallback } from "react";
import "./style.css";
import * as Yup from "yup";
import { Input, Button, Typography } from "antd";
import { useFormik } from "formik";
import { UserOutlined, LockOutlined, CloseOutlined } from "@ant-design/icons";
import logoSignIn from "../../assets/logoSignIn.png";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SignInAction } from "../../Store/actions/userActions";

const { Text } = Typography;

const validationSchema = Yup.object().shape({
  taiKhoan: Yup.string().required("Username is invalid!"),
  matKhau: Yup.string()
    .required("PassWord is invalid!")
    .min(6, "PassWord must have min 6 characters")
    .max(32, "PassWord have max 32 characters"),
});
function SignIn(props) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema,
    validateOnMount: true,
  });

  const goToHome = () => {
    props.history.push('/')
  }

  // set tất cả các input là touched khi submit
  const setAllTouched = useCallback(() => {
    Object.keys(formik.values).forEach((key) => {
      formik.setFieldTouched(key);
    });
  }, [formik]);
  

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setAllTouched();
      if (!formik.isValid) return;
      dispatch(SignInAction(formik.values, goToHome));
    },
    [formik.values, dispatch, setAllTouched]
  );

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
            Username:
          </Text>
          <Input
            name="taiKhoan"
            size="large"
            value={formik.values.taiKhoan}
            prefix={<UserOutlined />}
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
            value={formik.values.matKhau}
            prefix={<LockOutlined />}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.matKhau && (
            <span className="text-red-500">{formik.errors.matKhau}</span>
          )}
        </div>
        <Button
          className="btnLogin my-4"
          type="primary"
          htmlType="submit"
          block>
          Sign In
        </Button>
        <div className="flex justify-center my-2 text-blue-500 hover:text-indigo-500">
          <NavLink to="/signup">Don't have an account?</NavLink>
        </div>
      </form>
    </>
  );
}

export default SignIn;
