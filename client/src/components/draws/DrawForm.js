import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { postDraw } from '../../redux/actions/draw';

const DrawForm = () => {
  // add num column to draw on backend to allow choice of num of cards
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      question: '',
    },
    onSubmit: (values, {resetForm}) => {
      dispatch(postDraw(values));
      resetForm({ values: { question: '' } });
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input 
          id="question"
          name="question"
          type="text"
          value={formik.question}
          onChange={formik.handleChange}
        />

        <button>Draw</button>

      </form>
    </div>
  );
};

export default DrawForm;
