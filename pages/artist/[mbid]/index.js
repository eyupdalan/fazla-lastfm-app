import styles from "../../../styles/ArtistDetailPage.module.css";
import ApiUrl from "../../../constants/apiUrls";
import {useEffect, useState} from "react";
import TopArtistDetailCardList from "../../../components/TopArtistDetailCardList";
import Link from "next/link";
import {useQuery} from "react-query";
import {useRouter} from "next/router";

export default function Artist() {
    const [artist, setArtist] = useState({});

    const router = useRouter()

    const getArtistData = async ({queryKey}) => {
        const [_key, { myRouter }] = queryKey
        const mbid = myRouter.query.mbid;
        const topAlbumsPromise = fetch(ApiUrl.getTopAlbums(mbid));
        const topTracksPromise = fetch(ApiUrl.getTopTracks(mbid));
        const response = await Promise.all([topAlbumsPromise, topTracksPromise]);

        const topAlbums = await response[0].json();
        const topTracks = await response[1].json();

        return {topAlbums: topAlbums.topalbums.album, topTracks: topTracks.toptracks.track}
    }

    const query = useQuery(['artist-data',{myRouter: router}], getArtistData)

    useEffect(() => {
        if (!query || !query.data || !query.data.topAlbums || query.data.topAlbums.length <= 0) {
            return;
        }

        const artist = query.data.topAlbums[0].artist;
        setArtist(artist);
    }, [query])

    return (
        <div className={styles.artistDetailContainer}>
            <div className={styles.artistInfo}>
                <div className={styles.backButton}>
                    <Link href="/">Back</Link>
                </div>
                <h1>{artist.name}</h1>
            </div>
            <div className={styles.artistDetails}>
                <div className={styles.artistDetailColumn}>
                    <h1>Top Albums</h1>
                    <TopArtistDetailCardList data={query.data ? query.data.topAlbums : []}/>
                </div>
                <div className={styles.artistDetailColumn}>
                    <h1>Top Tracks</h1>
                    <TopArtistDetailCardList data={query.data ? query.data.topTracks : []}/>
                </div>
            </div>
        </div>
    )
}