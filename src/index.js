import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import { shuffle, sample } from 'underscore';

const authors = [
  {
    name: 'Mark Twain',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia commons',
    books: [
      'The Adventures of Huckleberry Finn',
    ]
  },
  {
    name: 'Joseph Conrad',
    imageUrl: 'images/authors/josephconrad.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Heart of Darkness']
  },
  {
    name: 'J.K. Rowling',
    imageUrl: 'images/authors/jkrowling.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution:'Daniel Ogren',
    books: ['Harry Potter and the Sorceres Stone']
  },
  {
    name: 'Stephen King',
    imageUrl: 'images/authors/stevenking.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution:'Pinguino',
    books: ['The Shining', 'IT']
  },
  {
    name: 'Charles Dickens',
    imageUrl: 'images/authors/charlesdickens.png',
    imageSource: 'Wikimedia Commons',
    books: ['David Copperfield', 'A Tale of Two Cities']
  },
  {
    name: 'William ShakeSpeare',
    imageUrl: 'images/authors/williamsakespear.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
  }
]
function getTurnData(authors) {
  const allBooks = authors.reduce(function(p,c,i){
    return p.concat(c.books)
  }, [])

  const fourRandomBooks = shuffle(allBooks).slice(0,4)
  const answer = sample(fourRandomBooks)

  return {
    books: fourRandomBooks,
    author: authors.find(author => author.books.some(title => title === answer))
  }
}
const state = {
  turnData: getTurnData(authors)
}
ReactDOM.render(
  <React.StrictMode> 
    <AuthorQuiz {...state}/>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
