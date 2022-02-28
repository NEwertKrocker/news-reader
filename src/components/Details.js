import React from 'react';


const Details = ({selectedArticle}) => {

  return(
    <div>
      <h1>{selectedArticle.title}</h1>
      <p>{selectedArticle.abstract}</p>
      <h6>{selectedArticle.byline}</h6>
      <a href={selectedArticle.short_url}>Read the full story on the NYT website</a>
    </div>
  )
}


export default Details;
