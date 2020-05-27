import React from 'react';
import './UserInput.css';

const UserInput = props => {

  console.log("UserIntput: ")
  console.log(props)

  return (
    <div className="input">
      <input
        type="text"
        onChange={props.changed}
        value={props.userName} />
    </div>
  )

}

export default UserInput;