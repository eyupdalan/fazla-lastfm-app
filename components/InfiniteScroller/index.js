import {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import {useInfiniteQuery} from "react-query";

export default function InfiniteScroller({queryKey, apiCallback, childrenRenderer, lastPageController}) {
    const [isLastPage, setIsLastPage] = useState(false);
    const [lastElement, setLastElement] = useState(null);
    const observer = useRef(null);

    const getNextPageParam = (lastPage) => {
        return lastPage.page + 1
    }
    const {
        isLoading,
        isError,
        error,
        data,
        fetchNextPage,
        isFetching,
        isFetchingNextPage
    } = useInfiniteQuery([queryKey], apiCallback, {getNextPageParam});

    useEffect(()=>{
        setIsLastPage(lastPageController(data))
<<<<<<< HEAD
    },[data])
=======
    },[data, lastPageController])
>>>>>>> 4615feb (eyup adds tests and stories)

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
        const generateObserver = (entries) => {
<<<<<<< HEAD
            debugger;
=======
>>>>>>> 4615feb (eyup adds tests and stories)
            if (isLastPage) {
                return;
            }
            const first = entries[0];
            if (first.isIntersecting) {
                fetchNextPage();
            }
        }

        observer.current = new IntersectionObserver(generateObserver);
    }, [isLastPage, fetchNextPage]);

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

InfiniteScroller.propTypes = {
    queryKey: PropTypes.string.isRequired,
    apiCallback: PropTypes.func.isRequired,
    childrenRenderer: PropTypes.func.isRequired,
    lastPageController: PropTypes.func.isRequired
}

InfiniteScroller.defaultProps = {
    queryKey: '',
    apiCallback: () => {
    },
    childrenRenderer: () => {
    },
    lastPageController: () => {
    }
}