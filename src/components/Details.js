import React from 'react';
import '../css/Details.css';

const Details = ({selectedArticle}) => {

  let photo;
  if(selectedArticle.multimedia){
    photo = selectedArticle.multimedia[1].url
  } else {
    photo = ``;
  }

  return(
    <div className='details'>
      <img src={photo}/>
      <h1>{selectedArticle.title}</h1>
      <p>{selectedArticle.abstract}</p>
      <h6>{selectedArticle.byline}</h6>
      <a href={selectedArticle.short_url}>Read the full story on the NYT website</a>
    </div>
  )
}


export default Details;
