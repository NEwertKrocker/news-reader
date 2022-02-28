import React from 'react';
import Details from './Details'

const DetailsContainer = ({selectedArticle}) => {

  return(
    <div>
      {selectedArticle && <Details selectedArticle={selectedArticle}/>}
    </div>
  )
}


export default DetailsContainer;
