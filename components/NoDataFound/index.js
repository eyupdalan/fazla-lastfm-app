import PropTypes from "prop-types";

export default function NoDataFound({message}) {
    return (
        <div id={"no-data-found"}>{message}</div>
    );
}

NoDataFound.propTypes = {
    /**
     * Message to display when no data is found
     */
    message: PropTypes.string
}
NoDataFound.defaultProps = {
    message: "No data found"
}