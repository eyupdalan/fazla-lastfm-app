import {useEffect, useRef, useState} from "react";
import {useInfiniteQuery} from "react-query";

export default function InfiniteScroller({queryKey, apiCallback, childrenRenderer}) {
    const [lastElement, setLastElement] = useState(null);
    const observer = useRef(null);

    const {
        isLoading,
        isError,
        error,
        data,
        fetchNextPage,
        isFetching,
        isFetchingNextPage
    } = useInfiniteQuery([queryKey], apiCallback, {
        getNextPageParam: (lastPage) => {
            return lastPage.page + 1
        }
    });

    useEffect(() => {
        const currentElement = lastElement;
        const currentObserver = observer.current;

        if (currentElement) {
            currentObserver.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                currentObserver.unobserve(currentElement);
            }
        };
    }, [lastElement]);

    useEffect(() => {
        observer.current = new IntersectionObserver(
            (entries) => {
                const first = entries[0];
                if (first.isIntersecting) {
                    fetchNextPage();
                }
            })

    }, [fetchNextPage]);

    return (
        <>
            <div>{isLoading ? 'Loading...' : null}</div>
            {childrenRenderer(data)}
            <div ref={setLastElement}/>
            <div>{isError ? error.message : null}</div>
            <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
        </>
    )
}