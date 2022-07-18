import { useRef, useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";
import classes from "./NewCommentForm.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const [isEntering, setIsEntering] = useState(true);
  const { sendRequest, status, error } = useHttp(addComment);
  const { onAddComment } = props;
  useEffect(() => {
    if (status === "completed" && !error) {
      onAddComment();
    }
  }, [status, onAddComment, error]);
  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredText = commentTextRef.current.value;
    if (enteredText.trim().length === 0 || enteredText === "") {
      setIsEntering(false);
      return;
    }
    sendRequest({ commentData: { text: enteredText }, quoteId: props.quoteId });
    setIsEntering(true);
    commentTextRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner></LoadingSpinner>
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
        {!isEntering && <p className={classes.invalid}>Must not be blank</p>}
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
