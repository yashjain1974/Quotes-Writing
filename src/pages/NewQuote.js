import QuoteForm from "../components/quotes/QuoteForm";

import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();
  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);
  const onAddData = (quotedata) => {
    sendRequest(quotedata);
  };

  return (
    <section>
      <QuoteForm
        isLoading={status === "pending"}
        onAddQuote={onAddData}
      ></QuoteForm>
    </section>
  );
};
export default NewQuote;
