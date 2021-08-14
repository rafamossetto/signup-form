import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const FormComponent = () => {
  const initialValues = {
    first: "",
    last: "",
    email: "",
    password: "",
  };
  const onSubmit = (values) => console.log(values);
  const validationSchema = Yup.object({
    first: Yup.string().required("First Name cannot be empty"),
    last: Yup.string().required("Last Name cannot be empty"),
    email: Yup.string()
      .required("Email cannot be empty")
      .email("Looks like this is not an email"),
    password: Yup.string().required("Password cannot be empty"),
  });
  return (
    <div className="bg-white rounded-lg p-6 lg:p-8">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => {
          return (
            <Form className="space-y-5">
              <div>
                <Field
                  type="text"
                  id="first"
                  name="first"
                  placeholder="First Name"
                  className={
                    touched.first && errors.first ? "error-input" : "input"
                  }
                />
                <ErrorMessage name="first" component={TextError} />
              </div>

              <div>
                <Field
                  type="text"
                  id="last"
                  name="last"
                  placeholder="Last Name"
                  className={
                    touched.last && errors.last ? "error-input" : "input"
                  }
                />
                <ErrorMessage name="last" component={TextError} />
              </div>

              <div>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  className={
                    touched.email && errors.email ? "error-input" : "input"
                  }
                />
                <ErrorMessage name="email" component={TextError} />
              </div>

              <div>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className={
                    touched.password && errors.password
                      ? "error-input"
                      : "input"
                  }
                />
                <ErrorMessage name="password" component={TextError} />
              </div>

              <button type="submit" className="submit-btn tracking-wider">
                claim your free trial
              </button>
              <p className="text-prim-neut-violet text-xs text-center">
                By clicking the button, you are agreeing to our{" "}
                <span className="text-prim-red font-bold">
                  Terms and Services
                </span>
              </p>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormComponent;
