import { Route, Switch, Redirect } from "react-router-dom";
import QuoteDetail from "./pages/QuoteDetail";
import Quotes from "./pages/Quotes";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes"></Redirect>
          </Route>
          <Route path="/quotes" exact>
            <Quotes></Quotes>
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail></QuoteDetail>
          </Route>
          <Route path="/new-quotes">
            <NewQuote></NewQuote>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
