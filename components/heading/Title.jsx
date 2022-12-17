import PropTypes from 'prop-types';

export default function Title(props) {
    return (
        <span className="text-xl lg:text-2xl">{props.text}</span>
    );
}

Title.propTypes = {
    text: PropTypes.string.isRequired
}