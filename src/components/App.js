import React, { Component } from 'react';
import { fetchHeadlines } from '../apiCalls'
import HeadlineContainer from './HeadlineContainer'
import DetailsContainer from './DetailsContainer'
import '../css/App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      articles: [],
      selectedArticle: {}
    }
  }

  selectArticle = (event) => {
    console.log(event.target.id)
    let targetArticle = this.state.articles.find(article => article.uri === event.target.id);
    this.setState({ selectedArticle: targetArticle })
  }

  componentDidMount(){
    fetchHeadlines()
      .then(data => {
        this.setState({ articles: data.results, selectedArticle: data.results[0] })
      })
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <p> Hey, here's where a site is gonna go </p>
        </header>
        <main>
          <HeadlineContainer articles={this.state.articles} selectArticle={this.selectArticle} />
          <DetailsContainer selectedArticle={this.state.selectedArticle} />
        </main>
      </div>
    );
  }
}

export default App;
