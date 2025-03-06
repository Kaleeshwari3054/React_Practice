import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

//  Step 1: Define Validation Schema
const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name cannot exceed 20 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\d+$/, "Phone number must contain only numbers")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number cannot exceed 15 digits")
    .required("Phone number is required"),
  city: Yup.string().required("City is required"),
});

function FormData() {
  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "left" }}>
      <h2>Form Validation Example</h2>

      {/*  Step 2: Implement Formik */}
      <Formik
        initialValues={{ name: "", email: "", phone: "", city: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form Data:", values);
          alert("Form submitted successfully!");
          resetForm(); // Reset form after submission
        }}
      >
        {({ touched, errors }) => (
          <Form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            
            {/*  Name Field */}
            <label htmlFor="name">Name:</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" style={{ color: "red" }} />

            {/*  Email Field */}
            <label htmlFor="email">Email:</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" style={{ color: "red" }} />

            {/*  Phone Field */}
            <label htmlFor="phone">Phone:</label>
            <Field name="phone" type="text" />
            <ErrorMessage name="phone" component="div" style={{ color: "red" }} />

            {/* City Field */}
            <label htmlFor="city">City:</label>
            <Field name="city" type="text" />
            <ErrorMessage name="city" component="div" style={{ color: "red" }} />

            {/*  Submit Button */}
            <button
              type="submit"
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormData;
