import React from 'react';
import './App.css';
function Hero(props) {
  return (
    <div className='jumbotron col-10 offset-1'>
      <h1>Author Quiz</h1>
      <p>Selecct the book written by the author shown </p>
    </div>
  )
}
function Continue(props) {
  return ( 
    <div>

    </div>
  )
}
function Footer(){
  return (
    <div className='row' id="footer">
      <div className='col-12'>
        <p className='text-muted credit'>
          All images are from <a href='http://commons.wikimedia.org/wiki/Main_'> Wikimedia Commons</a> and are in the public domain
        </p>
      </div>
    </div>
  )
}
function Book({title}) {
  return (
    <div className='answer'>
      <h4>{title}</h4>
    </div>
  )
}
function Turn({author, books}) {
  return (
    <div className='row turn' style={{backgroundColor:'white'}} >
      <div className='col-4 offset-1'>
        <img src={author.imageUrl} alt='author' className='authorimage' />
      </div>
      <div className='col-6'>
        {books.map(title => (
          <Book title={title} key={title} />
        ))}
      </div>
    </div>
  )
}

function AuthorQuiz({turnData}) {
  return (
    <div className='container-fluid'>
      <Hero />
      <Turn {...turnData}/>
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
