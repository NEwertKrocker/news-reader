import React from 'react';
import '../css/Headline.css'

const Headline = ({title, id, section, selectArticle}) => {

  return(
    <div className='headline-card' id={id} onClick={() => {selectArticle(id)}}>
      <p className='headline'>{title}</p>
      <p className='headline-section'>{section}</p>
    </div>
  )

}


export default Headline;
