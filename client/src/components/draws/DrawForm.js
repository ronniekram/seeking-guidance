import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postDraw } from '../../redux/actions/draw';
import styles from '../../assets/styles/draws/form.module.scss';

const DrawForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question !== '') {
      dispatch(postDraw({ question }, history));
      setQuestion('');
    } else {
      setQuestion('You have to ask something...')
    }
  };

  return (
    <div className={styles.container}>
      
      <div>
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
