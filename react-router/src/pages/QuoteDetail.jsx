import { Link, useParams } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import { useEffect } from 'react';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

// const DUMMY_QUOTES = [
//   { id: "q1", author: "Max", text: "Learning React is fun!" },
//   { id: "q2", author: "Maximilian", text: "Learning React is great!" },
// ];

function QuoteDetail() {
  // const match = useMatches()
  // console.log(match);

  const { quoteId } = useParams();

  const { sendRequest, status, data: loadedQuote, error } = useHttp(
    getSingleQuote,
    true);

  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return (
      <p className='centered focused'>
        {error}
      </p>
    )
  }

  if (!loadedQuote.text) {
    return (<NoQuotesFound />)
  }

  // const quote = DUMMY_QUOTES.find(q => q.id === quoteId);

  // if (!quoteId) {
  //   return <p>No quote found!</p>
  // }

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <div className='centered'>
        <Link className="btn--flat" to={`/quotes/${quoteId}/comments`}>
          Load Comments
        </Link>
        {/* <Routes>
          <Route path={`/quotes/${quoteId}/comments`} element={<Comments />} />
        </Routes> */}
      </div>
      {/* < Outlet /> */}

    </>
  )
}

export default QuoteDetail