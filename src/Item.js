import React from 'react';
import PropTypes from 'prop-types';

/* Stateless functional component. */

const Item = props => {
	return <li>{props.item}</li>;
};

Item.propTypes = {
	item: PropTypes.string.isRequired,
};

export default Item;