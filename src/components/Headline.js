import React from 'react';
import '../css/Headline.css'

const Headline = ({title, id, selectArticle}) => {

  return(
    <div className='headline' id={id} onClick={(e) => {selectArticle(e)}}>{title}</div>
  )

}


export default Headline;
