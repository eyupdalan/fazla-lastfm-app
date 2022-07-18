import PropTypes from "prop-types";
import Artist from "../Artist";

export default function ArtistList({data}) {
    const artists = data ? data.map(artist => (
        <Artist
            key={`${artist.mbid}-${new Date()}`}
            mbid={artist.mbid}
            name={artist.name}
            playCount={parseInt(artist.playcount, 10)}
            listeners={parseInt(artist.listeners, 10)}
            image={artist.image[0]["#text"]}
        />
    )) : null;
    return (
        <>
            {artists}
        </>
    )
}
ArtistList.propTypes = {
    data: PropTypes.array.isRequired
}

ArtistList.defaultProps = {
    data: []
}
