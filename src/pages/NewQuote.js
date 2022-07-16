import QuoteForm from "../components/quotes/QuoteForm";

import { useState } from "react";
const NewQuote = () => {
  const [addquote, setAddquote] = useState("");
  const onAddData = (quotedata) => {
    setAddquote(quotedata);
  };
  console.log(addquote);
  return (
    <section>
      <QuoteForm onAddQuote={onAddData}></QuoteForm>
    </section>
  );
};
export default NewQuote;
