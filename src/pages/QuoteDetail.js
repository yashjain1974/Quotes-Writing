import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

import useHttp from "../hooks/use-http";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { getSingleQuote } from "../lib/api";
// const DUMMY_DATA = [
//   { id: "q1", author: "Yash Jain", text: "Learning leads to future earning" },
//   {
//     id: "q2",
//     author: "Mahiman Jain",
//     text: "Don't fall in love until you become responsible",
//   },
// ];
const QuoteDetail = () => {
  const paramId = useParams();
  const match = useRouteMatch();
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);
  const { quoteId } = paramId;

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  if (!loadedQuote.text) {
    return <p>No Quote found</p>;
  }
  return (
    <section>
      <HighlightedQuote
        text={loadedQuote.text}
        author={loadedQuote.author}
      ></HighlightedQuote>
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Comment Here
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </section>
  );
};
export default QuoteDetail;
