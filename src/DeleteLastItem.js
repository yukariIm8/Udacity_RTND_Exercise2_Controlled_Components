import React from 'react';
import PropTypes from 'prop-types';

/* Stateless Functional Component */

const DeleteLastItem = props => {

  const handleDeleteLastItem = event => {
    props.onDeleteLastItem();
  };
  
  return (
    <button onClick={handleDeleteLastItem} disabled={props.buttonDisabled}>
      Delete Last Item
    </button>
  );
};

DeleteLastItem.propTypes = {
	onDeleteLastItem: PropTypes.func.isRequired,
  	buttonDisabled: PropTypes.func.isRequired
};

export default DeleteLastItem;