import PropTypes from "prop-types";
import Artist from "../Artist";

export default function ArtistList({data}){
    return (
        <div>
            <div>{JSON.stringify(data)}</div>
            <Artist/>
        </div>
    )
}
ArtistList.propTypes = {
    data: PropTypes.array.isRequired
}

ArtistList.defaultProps = {
    data: []
}
