import QuoteForm from '../components/quotes/QuoteForm'
import { useNavigate } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';
import { useEffect } from 'react';

function NewQuote() {
  //navigate programatically
  const history = useNavigate();

  //takes a function as first parameter
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === 'COMPLETED') {
      history("/quotes");
    }
  }, [status, history]);


  const addQuoteHandler = quoteData => {
    sendRequest(quoteData)
    console.log(quoteData);
  }

  return (
    <QuoteForm isLoading={status === 'PENDING'} onAddQuote={addQuoteHandler} />
  )
}

export default NewQuote