import PropTypes from 'prop-types';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ArtistList from "../components/ArtistList";
import ApiUrl from "../constants/apiUrls";

export default function Home({artists, page, totalPages}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Fazla Gıda Frontend Case Study</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <ArtistList data={artists}/>
                <div>
                    <p>Page: {page}</p>
                    <p>Total Pages: {totalPages}</p>
                </div>
            </main>

            <footer className={styles.footer}>
                Fazla Gıda Frontend Case Study
            </footer>
        </div>
    )
}

Home.propTypes = {
    artists: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired
}

export async function getServerSideProps({query} = {query: {page: 1}}) {
    const pageNumber = query.page || 1;
    const url = ApiUrl.getTopArtists(pageNumber);
    const res = await fetch(url);
    const data = await res.json();
    const artists = data.artists.artist;
    const {page, totalPages} = data.artists["@attr"]

    return {props: {artists, page: parseInt(page, 10), totalPages: parseInt(totalPages, 10)}}
}