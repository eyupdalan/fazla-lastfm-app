import PropTypes from "prop-types";
import Artist from "../Artist";

export default function ArtistList({data}){
    const artists = data.map(artist => (
        <Artist
            key={artist.mbid}
            mbid={artist.mbid}
            name={artist.name}
            playcount={artist.playcount}
            listeners={artist.listeners}
            image={artist.image[0]["#text"]}
        />
    ))
    return (
        <div>
            <h2>Artists List</h2>
            {artists}
        </div>
    )
}
ArtistList.propTypes = {
    data: PropTypes.array.isRequired
}

ArtistList.defaultProps = {
    data: []
}
