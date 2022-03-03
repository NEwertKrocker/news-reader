import React from 'react';
import '../css/NavBar.css'

const NavBar = ({sections, filterSections}) => {

  let articleSections = sections.map((section) => {
    return <li key={section} tabindex='0' onClick={() => filterSections(section)}>{section}</li>
  })

  return(
    <div>
      <ul className='section-list'>{articleSections}</ul>
    </div>
  )

}


export default NavBar;
