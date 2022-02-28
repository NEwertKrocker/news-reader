import React from 'react';
import Headline from './Headline'

const HeadlineContainer = ({articles}) => {

  let headlines = articles.map((article) => {
    return <Headline title={article.title} />
  })

  return(
    <div>
      {headlines}
    </div>
  )

}


export default HeadlineContainer;
