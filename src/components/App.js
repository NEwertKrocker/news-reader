import React, { Component } from 'react';
import { fetchHeadlines } from '../apiCalls'
import HeadlineContainer from './HeadlineContainer'
import DetailsContainer from './DetailsContainer'
import NavBar from './NavBar';
import '../css/App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      articles: [],
      sections: [],
      selectedArticle: {}
    }
  }

  selectArticle = (id) => {
    console.log(id)
    let targetArticle = this.state.articles.find(article => article.uri === id);
    this.setState({ selectedArticle: targetArticle })
  }

  componentDidMount(){
    fetchHeadlines()
      .then(data => {
        let sections = data.results.reduce((articleSections, article) => {
          if(!articleSections.includes(article.section)){
            articleSections.push(article.section)
          }
          return articleSections
        }, [])
        this.setState({ articles: data.results, sections: sections, selectedArticle: data.results[0] })
      })
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <p className='app-title'> NYT News Reader </p>
          <NavBar sections={this.state.sections}/>
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
