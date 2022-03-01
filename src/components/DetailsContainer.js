import React from 'react';
import Details from './Details';
import '../css/DetailsContainer.css';

const DetailsContainer = ({selectedArticle}) => {

  return(
    <div className='details-container'>
      {selectedArticle && <Details selectedArticle={selectedArticle}/>}
    </div>
  )
}


export default DetailsContainer;
