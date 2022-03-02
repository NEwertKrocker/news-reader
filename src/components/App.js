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
      allArticles: [],
      sections: [],
      selectedArticle: {}
    }
  }

  selectArticle = (id) => {
    console.log(id)
    let targetArticle = this.state.articles.find(article => article.uri === id);
    this.setState({ selectedArticle: targetArticle })
  }

  filterSections = (section) => {
    console.log(section)
    if(section === 'all articles'){
      this.setState({ articles: this.state.allArticles })
    } else {
      let filteredArticles = this.state.allArticles.filter(article => article.section === section)
      this.setState({ articles: filteredArticles })
    }
  }

  componentDidMount(){
    fetchHeadlines()
      .then(data => {
        let sections = data.results.reduce((articleSections, article) => {
          if(!articleSections.includes(article.section)){
            articleSections.push(article.section)
          }
          return articleSections
        }, ["all articles"])
        this.setState({ articles: data.results, allArticles: data.results, sections: sections, selectedArticle: data.results[0] })
      })
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <p className='app-title'> NYT News Reader </p>
          <NavBar sections={this.state.sections} filterSections={this.filterSections}/>
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
