import React, { Component } from 'react';
import { fetchHeadlines } from '../apiCalls'
import HeadlineContainer from './HeadlineContainer'
import '../css/App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      articles: []
    }
  }



  componentDidMount(){
    fetchHeadlines()
      .then(data => {
        this.setState({ articles: data.results })
      })
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <p> Hey, here's where a site is gonna go </p>
        </header>
        <HeadlineContainer articles={this.state.articles}/>
      </div>
    );
  }
}

export default App;
