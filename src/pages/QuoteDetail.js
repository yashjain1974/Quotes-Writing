import { useParams } from "react-router-dom";
import { Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuotesFound from '../components/quotes/NoQuotesFound'
const DUMMY_DATA = [
  { id: "q1", author: "Yash Jain", text: "Learning leads to future earning" },
  {
    id: "q2",
    author: "Mahiman Jain",
    text: "Don't fall in love until you become responsible",
  },
];
const QuoteDetail = () => {
  const paramId = useParams();
  const quote=DUMMY_DATA.find(quote=>quote.id===paramId.quoteId)
  if(!quote){
    return <NoQuotesFound></NoQuotesFound>

  }
  return (
    <section>
      <HighlightedQuote text={quote.text} author={quote.author}></HighlightedQuote>
      
      <Route path={`/quotes/${paramId.quoteId}/comments`}>
        <Comments></Comments>
      </Route>
    </section>
  );
};
export default QuoteDetail;
