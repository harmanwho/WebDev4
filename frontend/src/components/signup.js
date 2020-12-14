import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "../css/signup.css";
import Button from "../components/reusable/button";

export default function SignUp() {
  return (
      <div className="container form-container">
        <h1 className="main-heading text-center p-5">Sign Up to <span className="form-about">RentHouse</span> </h1>
        <Formik
            initialValues={{ firstName: "", lastName: "", email: "" }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("*Required"),
                lastName: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("*Required"),
                email: Yup.string().email("Invalid email address").required("*Required"),
                password: Yup.string().required('*Required'),
                confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
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
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="col-5">
                            <input
                                id="firstName"
                                type="text"
                                {...formik.getFieldProps("firstName")}
                            />
                        </div>
                        <div className="col-2 error-field">
                            {formik.touched.firstName && formik.errors.firstName ? (
                                <div>{formik.errors.firstName}</div>
                            ) : null}
                        </div>
                    </div>

                    <div className="row p-2">
                        <div className="col-5">
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                        <div className="col-5">
                            <input
                                id="lastName"
                                type="text"
                                {...formik.getFieldProps("lastName")}
                            />
                        </div>
                        <div className="col-2 error-field">
                            {formik.touched.lastName && formik.errors.lastName ? (
                                <div>{formik.errors.lastName}</div>
                            ) : null}
                        </div>
                    </div>

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

                    <div className="row p-2">
                        <div className="col-5">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                        </div>
                        <div className="col-5">
                            <input id="confirmPassword" type="password" {...formik.getFieldProps("confirmPassword")} />
                        </div>
                        <div className="col-2 error-field">   
                            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                <div>{formik.errors.confirmPassword}</div>
                            ) : null}
                        </div>
                    </div>

                    <div className="center">
                        <Button type="success" text="Sign Up" />
                    </div>
                    <h5 className="main-heading text-center p-2">
                        Already have an account?  
                        <span className="form-about ml-2">
                            <a 
                                className="form-link ml-2"
                                href="/login">
                                Login
                            </a>   
                        </span>
                    </h5>
                </form>
            )}
        </Formik>
      </div>
  );
}
