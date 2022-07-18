import PropTypes from "prop-types";
import Artist from "../Artist";

export default function ArtistList({data}){
    const artists = data.map(artist => (
        <Artist
            key={artist.mbid}
            mbid={artist.mbid}
            name={artist.name}
            playCount={artist.playcount}
            listeners={artist.listeners}
            image={artist.image[0]["#text"]}
        />
    ))
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
