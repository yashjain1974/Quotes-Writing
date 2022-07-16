import QuoteList from "../components/quotes/QuoteList";

const DUMMY_DATA = [
  { id: "q1", author: "Yash Jain", text: "Learning leads to future earning" },
  {
    id: "q2",
    author: "Mahiman Jain",
    text: "Don't fall in love until you become responsible",
  },
];
console.log(DUMMY_DATA);
const Quotes = () => {
  return <QuoteList quotes={DUMMY_DATA}></QuoteList>;
};
export default Quotes;
