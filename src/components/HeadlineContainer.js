import React from 'react';
import Headline from './Headline'

const HeadlineContainer = ({ articles, selectArticle }) => {

  let headlines = articles.map((article) => {
    return <Headline key={article.uri} id={article.uri} title={article.title} section={article.section} selectArticle={selectArticle} />
  })

  return(
    <div className='headline-container'>
      {headlines}
    </div>
  )

}


export default HeadlineContainer;
