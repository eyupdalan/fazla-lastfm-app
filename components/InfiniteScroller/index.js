import {useState, useRef, useEffect} from "react";

export default function InfiniteScroller({children, onScroll, isFetching, isLoading, isError, error}) {
    const [lastElement, setLastElement] = useState(null);
    const observer = useRef(null);

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
                    onScroll();
                }
            })

    }, [onScroll]);

    return (
        <>
            <div>{isLoading ? 'Loading...' : null}</div>
            {children}
            <div ref={setLastElement}/>
            <div>{isError ? error.message : null}</div>
            <div>{isFetching ? 'Fetching...' : null}</div>
        </>
    )
}