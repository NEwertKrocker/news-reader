import React from 'react';
import '../css/Details.css';

const Details = ({selectedArticle}) => {

  let photo;
  let caption;
  if(selectedArticle.multimedia){
    photo = selectedArticle.multimedia[1].url;
    caption = selectedArticle.multimedia[1].caption;
  } else {
    photo = ``;
    caption = `Caption text not provided by NYT.`
  }

  return(
    <div className='details'>
      <img src={photo} alt={caption}/>
      <h1>{selectedArticle.title}</h1>
      <p>{selectedArticle.abstract}</p>
      <p className='byline'>{selectedArticle.byline}</p>
      <a href={selectedArticle.short_url}>Read the full story on the NYT website</a>
    </div>
  )
}


export default Details;
