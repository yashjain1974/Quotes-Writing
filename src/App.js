import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";

import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const Quotes = React.lazy(() => import("./pages/Quotes"));
const NotFoundpage = React.lazy(() => import("./pages/NotFoundpge"));
function App() {
  return (
    <div>
      <Layout>
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner></LoadingSpinner>
            </div>
          }
        >
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
            <Route path="*">
              <NotFoundpage></NotFoundpage>
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
