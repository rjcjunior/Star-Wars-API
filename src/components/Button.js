import React from 'react';
import PropTypes from 'prop-types';

const Button  = ({ text, action }) => <button class="btn-next" onClick={action}>
    { text }
</button>;

Button.propTypes = {
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
};

Button.defaultProps = {
    text: 'Next'
};

export default Button;