import { Fragment, useEffect } from 'react';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
import { useLocation, useNavigate } from 'react-router-dom';


const QuoteList = (props) => {
  const sortQuotes = (q, ascending) => {
    return q?.sort((quoteA, quoteB) => {
      if (ascending) {
        return quoteA.id > quoteB.id ? 1 : -1;
      } else {
        return quoteA.id < quoteB.id ? 1 : -1;
      }
    });
  };

  const history = useNavigate();

  const location = useLocation();
  console.log(location);

  //default js class
  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get('sort') === 'asc';


  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    // history('/quotes?sort=' + 'asc')
    // history('/quotes?sort=' + (isSortingAscending ? 'desc' : 'asc'));
    history(`${location.pathname}?sort=${(isSortingAscending ? 'desc' : 'asc')}`);

  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? 'Descending' : 'Ascending'}
        </button>
      </div>
      {props.quotes && (
        <ul className={classes.list}>
          {sortedQuotes.map((quote) => (
            <QuoteItem
              key={quote.id}
              id={quote.id}
              author={quote.author}
              text={quote.text}
            />
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default QuoteList;
