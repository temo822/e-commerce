// components/ReviewForm.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ReviewForm = ({ onSubmit }) => {
  const initialValues = { headline: '', review: '' };

  const validationSchema = Yup.object({
    headline: Yup.string().min(4, 'Must be at least 4 characters').required('Required'),
    review: Yup.string().min(15, 'Must be at least 15 characters').required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label htmlFor="headline">Headline:</label>
          <Field type="text" id="headline" name="headline" />
          <ErrorMessage name="headline" component="div" />
        </div>
        <div>
          <label htmlFor="review">Review:</label>
          <Field as="textarea" id="review" name="review" />
          <ErrorMessage name="review" component="div" />
        </div>
        <button type="submit">Submit Review</button>
      </Form>
    </Formik>
  );
};
