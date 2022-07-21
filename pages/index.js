import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ArtistList from "../components/ArtistList";
import ApiUrl from "../constants/apiUrls";
import InfiniteScroller from "../components/InfiniteScroller";

export default function Home() {
    const getTopArtists = async ({pageParam = 1}) => {
        const url = ApiUrl.getTopArtists(pageParam);
        const res = await fetch(url);
        const data = await res.json();
        const artists = data.artists.artist;
        const {page, totalPages} = data.artists["@attr"]

        return {artists, page: parseInt(page, 10), totalPages: parseInt(totalPages, 10)}
    };

    const isLastPage = (data) => {
        if (!data) {
            return false;
        }

        const {page, totalPages} = data.pages[data.pages.length - 1];
        return page === totalPages;
    }

    const childrenRenderer = (data) => {
        if (!data) {
            return null;
        }

        return data.pages.map((page) => <ArtistList key={new Date()} data={page.artists}/>)
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Fazla Gıda Frontend Case Study</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h2>Artists List</h2>
                <InfiniteScroller
                    queryKey={'top-artists'}
                    apiCallback={getTopArtists}
                    childrenRenderer={childrenRenderer}
                    lastPageController={isLastPage}
                />
            </main>
            <footer className={styles.footer}>
                Fazla Gıda Frontend Case Study
            </footer>
        </div>
    )
}