import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useFormik } from 'formik';
import { postDraw } from '../../redux/actions/draw';

const DrawForm = () => {
  // dispatch(postDraw(values));
  const dispatch = useDispatch();
  const [question, setQuestion] = useState('');

  const handleClick = () => {
    const drawObj = {
      question,
    }
    dispatch(postDraw(drawObj));
    setQuestion('');
  };

  return (
    <div>
      <input type="text" onChange={(e) => setQuestion(e.target.value)} value={question} />
      <button onClick={handleClick}>Draw</button>
    </div>
  );
};

export default DrawForm;
