import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../forms/Input';
import Button from '../forms/Input';
import { postDraw } from '../../redux/actions/draw';
import styles from './assets/drawform.module.css';

const DrawForm = () => {
  const dispatch = useDispatch();
  const [question, setQuestion] = useState('');

  const handleSubmit = () => {
    dispatch(postDraw({ question }));
    setQuestion('');
  };

  return (
    <div className={styles.container}>

      <div className={styles.illuminate}>
        Illuminate your path...
      </div>

      <form onSubmit={handleSubmit}>

        <input
          id="question"
          name="question"
          type="text"
          value={question}
          handleChange={(e) => setQuestion(e.target.value)} 
        />

        <button>Ask</button>
      </form>
    </div>
  );
};

export default DrawForm;


// <Input
// id="question"
// name="question"
// type="text"
// value={formik.values.question}
// handleChange={formik.handleChange}
// />
// <Button type="submit" text="Ask" />
