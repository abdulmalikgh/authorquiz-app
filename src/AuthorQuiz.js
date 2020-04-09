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
    <di>

    </di>
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
function Turn({author, books}) {
  return (
    <div className='row turn' style={{backgroundColor:'white'}} >
      <div className='col-4 offset-1'>
        <img src={author.imagUrl} alt='author' className='authorimage' />
      </div>
      <div className='col-6'>
        {books.map(title => (
          <p>{title}</p>
        ))}
      </div>
    </div>
  )
}
function App() {
  return (
    <div className='container-fluid'>
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
