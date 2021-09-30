import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import Input from '../forms/Input';
import Button from '../forms/Input';
import { postDraw } from '../../redux/actions/draw';

const DrawForm = () => {
  // add num column to draw on backend to allow choice of num of cards

  const dispatch = useDispatch();

  // formik values returns an object -- not iterable
  const formik = useFormik({
    initialValues: {
      question: '',
    },
    onSubmit: (values, {resetForm}) => {
      dispatch(postDraw(values));
      resetForm({ values: { question: '' } });
    }
  });

  console.log(formik.values)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Input
          id="question"
          name="question"
          type="text"
          value={formik.values.question}
          handleChange={formik.handleChange}
        />

        <Button type="submit" text="Draw" />
      </form>
    </div>
  );
};

export default DrawForm;
