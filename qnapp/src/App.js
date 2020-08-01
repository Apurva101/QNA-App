import React from 'react';
import {Route} from 'react-router-dom';
import NavBar from './Components/NavBar.js';
import Questions from './Questions/Questions.js';
import Question from './Question/Question.js';

function App() {
  return (
   <div>
   <NavBar/>
   <Route exact path='/' component={Questions}/>
   <Route exact path='/question/:questionId' component={Question}/>
   </div>
  );
}

export default App;
