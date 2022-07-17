import styles from "../../../styles/ArtistDetailPage.module.css";
import ApiUrl from "../../../constants/apiUrls";
import {useEffect, useState} from "react";
import TopArtistDetailCardList from "../../../components/TopArtistDetailCardList";

export default function Artist({topAlbums, topTracks}) {
    const [artist, setArtist] = useState({});

    useEffect(() => {
        if (!topAlbums || topAlbums.length <= 0) {
            return;
        }

        const artist = topAlbums[0].artist;
        setArtist(artist);
    }, [topAlbums])

    return (
        <div className={styles.artistDetailContainer}>
            <div className={styles.artistInfo}>
                <h1>{artist.name}</h1>
            </div>
            <div className={styles.artistDetails}>
                <div className={styles.artistDetailColumn}>
                    <h1>Top Albums</h1>
                    <TopArtistDetailCardList data={topAlbums}/>
                </div>
                <div className={styles.artistDetailColumn}>
                    <h1>Top Tracks</h1>
                    <TopArtistDetailCardList data={topTracks}/>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const mbid = context.query.mbid;
    const topAlbumsPromise = fetch(ApiUrl.getTopAlbums(mbid));
    const topTracksPromise = fetch(ApiUrl.getTopTracks(mbid));
    const response = await Promise.all([topAlbumsPromise, topTracksPromise]);

    const topAlbums = await response[0].json();
    const topTracks = await response[1].json();

    return {props: {topAlbums: topAlbums.topalbums.album, topTracks: topTracks.toptracks.track}}
}