import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      alert("User registered successfully!");
      resetForm();
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Registration Form (Formik)</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>Username:</label>
              <Field name="username" />
              <ErrorMessage
                name="username"
                component="p"
                style={{ color: "red" }}
              />
            </div>

            <div>
              <label>Email:</label>
              <Field name="email" type="email" />
              <ErrorMessage
                name="email"
                component="p"
                style={{ color: "red" }}
              />
            </div>

            <div>
              <label>Password:</label>
              <Field name="password" type="password" />
              <ErrorMessage
                name="password"
                component="p"
                style={{ color: "red" }}
              />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}