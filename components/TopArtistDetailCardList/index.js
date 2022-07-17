import NoDataFound from "../NoDataFound";
import ArtistDetailCard from "../ArtistDetailCard";

export default function TopArtistDetailCardList({data}) {
    if (!data || data.length === 0) {
        return <NoDataFound/>
    }

    return (
        <>
            {
                data.map(album => (
                        <ArtistDetailCard
                            key={album.name}
                            mbid={album.artist.mbid}
                            artist={album.artist.name}
                            name={album.name}
                            playCount={album.playcount}
                            listeners={album.listeners}
                            image={album.image[0]["#text"]}
                        />
                    )
                )
            }
        </>
    )
}