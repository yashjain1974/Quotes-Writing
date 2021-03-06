import { useRef, useState } from "react";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import { Prompt } from "react-router-dom";
import classes from "./QuoteForm.module.css";
import React from "react";

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [isEntering, setIsEntering] = useState(false);
  const [isValidauthor, setIsvalidauthor] = useState(true);
  const [isValidText, setIsvalidText] = useState(true);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;
    if (enteredAuthor.trim().length === 0 || enteredAuthor === "") {
      setIsvalidauthor(false);
      return;
    }
    if (enteredText.trim().length === 0 || enteredText === "") {
      setIsvalidText(false);
      return;
    }

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }
  const onFocusHandler = () => {
    setIsEntering(true);
  };
  const finishHandlingFunction = () => {
    setIsEntering(false);
  };

  return (
    <React.Fragment>
      <Prompt
        when={isEntering}
        message="Are you sure you want to leave"
      ></Prompt>
      <Card>
        <form
          onFocus={onFocusHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
            {!isEntering && !isValidauthor && (
              <p className={classes.invalid}>Field must not be blank</p>
            )}
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
            {!isEntering && !isValidText && (
              <p className={classes.invalid}>Field must not be blank</p>
            )}
          </div>
          <div className={classes.actions}>
            <button onClick={finishHandlingFunction} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default QuoteForm;
