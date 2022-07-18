import PropTypes from 'prop-types';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ArtistList from "../components/ArtistList";
import ApiUrl from "../constants/apiUrls";
import {useInfiniteQuery} from "react-query";
import {useEffect, useRef, useState} from "react";
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

    const {
        isLoading,
        isError,
        error,
        data,
        fetchNextPage,
        isFetching,
        isFetchingNextPage
    } = useInfiniteQuery(['top-artists'], getTopArtists, {
        getNextPageParam: (lastPage) => {
            return lastPage.page + 1
        }
    });

    return (
        <div className={styles.container}>
            <Head>
                <title>Fazla Gıda Frontend Case Study</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <InfiniteScroller
                    error={error}
                    isError={isError}
                    isLoading={isLoading}
                    isFetching={isFetching && !isFetchingNextPage}
                    onScroll={fetchNextPage}
                >
                    <h2>Artists List</h2>
                    {
                        data && data.pages.map(page => <ArtistList data={page.artists}/>)
                    }
                </InfiniteScroller>
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