import PropTypes from 'prop-types';

export default function Section(props) {
    return (
        <span className="text-2xl lg:text-4xl">{props.text}</span>
    );
}

Section.propTypes = {
    text: PropTypes.string.isRequired
}