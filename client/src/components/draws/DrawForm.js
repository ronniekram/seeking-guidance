import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
          onChange={(e) => setQuestion(e.target.value)} 
        />

        <button 
          type="submit"
        >
          Ask
        </button>
      </form>
    </div>
  );
};

export default DrawForm;
