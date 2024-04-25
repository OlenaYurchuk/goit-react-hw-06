import { useId } from "react";
import { Formik, Field, Form } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from 'nanoid'
import css from "./ContactForm.module.css"

export default function ContactForm({ onAddContact }) {
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const ContactFormSchema = Yup.object().shape({
    username: Yup.string().min(3, "Too Short!")
      .max(50, "Too Long!").required("Required"),
    phonenumber: Yup.string().required("Required")
  });

  const handleSubmit = (values, actions) => {
    onAddContact({
      id: nanoid(),
      name: values.username,
      number: values.phonenumber
    });
    actions.resetForm();
  }

  return (
    <Formik initialValues={{
      username: "",
      phonenumber: ""
    }}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <div className={css.inputWrap}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field className={css.input} name="username" id={nameFieldId} />
          <ErrorMessage className={css.error} name="username" component="span" />
        </div>
        <div className={css.inputWrap}>
          <label htmlFor={phoneFieldId}>Number</label>
          <Field className={css.input} name="phonenumber" id={phoneFieldId} />
          <ErrorMessage className={css.error} name="phonenumber" component="span" />
        </div>
        <button className={css.btn} type="submit">Add contact</button>
      </Form>
    </Formik>
  )
}