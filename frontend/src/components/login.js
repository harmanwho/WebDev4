import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "../css/signup.css";
import Button from "../components/reusable/button";

export default function LogIn() {
  return (
      <div className="container form-container">
        <h1 className="main-heading text-center p-5">Log In to <span className="form-about">RentHouse</span> </h1>
        <Formik
            initialValues={{ email: "", password:"" }}
            validationSchema={Yup.object({
                email: Yup.string().email("Invalid email address").required("*Required"),
                password: Yup.string().required('*Required')
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
            >
            {(formik) => (
                <form class="form-area" onSubmit={formik.handleSubmit}>
                    <div className="row p-2">
                        <div className="col-5">
                            <label htmlFor="email">Email Address</label>
                        </div>
                        <div className="col-5">
                            <input id="email" type="email" {...formik.getFieldProps("email")} />
                        </div>
                        <div className="col-2 error-field">   
                            {formik.touched.email && formik.errors.email ? (
                                <div>{formik.errors.email}</div>
                            ) : null}
                        </div>
                    </div>

                    <div className="row p-2">
                        <div className="col-5">
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="col-5">
                            <input id="password" type="password" {...formik.getFieldProps("password")} />
                        </div>
                        <div className="col-2 error-field">   
                            {formik.touched.password && formik.errors.password ? (
                                <div>{formik.errors.password}</div>
                            ) : null}
                        </div>
                    </div>

                    <div className="center">
                        <Button type="success" text="Log In" />
                    </div>
                    <h5 className="main-heading text-center p-2">
                        Don't have an account?  
                        <span className="form-about ml-2">
                            <a 
                                className="form-link ml-2"
                                href="/signup">
                                Sign Up
                            </a>   
                        </span>
                    </h5>
                </form>
            )}
        </Formik>
      </div>
  );
}
