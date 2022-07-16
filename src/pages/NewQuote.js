import QuoteForm from "../components/quotes/QuoteForm";

import { useState } from "react";
import { useHistory } from "react-router-dom";
const NewQuote = () => {
  const [addquote, setAddquote] = useState("");
  const history = useHistory();
  const onAddData = (quotedata) => {
    setAddquote(quotedata);
    history.push("/quotes");
  };

  console.log(addquote);
  return (
    <section>
      <QuoteForm onAddQuote={onAddData}></QuoteForm>
    </section>
  );
};
export default NewQuote;
