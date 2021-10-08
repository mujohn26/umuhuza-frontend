import React from 'react'
import { Input } from 'semantic-ui-react'

import './Welcome.css'

const searchStyle={
  width: '50%',
  height: '50px',
  marginLeft: '23%'
}
const SearchInput = () => {
  return (
    <div className='search-input-wrapper'>
      <Input placeholder='Search different topics' style={searchStyle} icon='search' />
    </div>
   );
}
 
export default SearchInput;