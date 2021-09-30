import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useFormik } from 'formik';
import { postDraw } from '../../redux/actions/draw';

const DrawForm = () => {
  // dispatch(postDraw(values));
  const dispatch = useDispatch();
  const [question, setQuestion] = useState('');
  const [ids, setIds] = useState([]);

  const generateCards = () => {
    for (let i = 0; i < 3; i++) {
      const randomId = Math.floor(Math.random() * 78);
      setIds([...ids, randomId]);
    };
  };

  const handleClick = () => {
    const drawObj = {
      question,
      card_ids: ids
    }
    generateCards()
    dispatch(postDraw(drawObj))
  };

  return (
    <div>
      <input type="text" onChange={(e) => setQuestion(e.target.value)} />
      <button onClick={handleClick}>Draw</button>
    </div>
  );
};

export default DrawForm;
