import { useParams } from "react-router-dom";
import { Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
const QuoteDetail = () => {
  const paramId = useParams();
  return (
    <section>
      <h1>Quote 1</h1>
      <h1>{paramId.quoteId}</h1>
      <Route path={`/quotes/${paramId.quoteId}/comments`}>
        <Comments></Comments>
      </Route>
    </section>
  );
};
export default QuoteDetail;
