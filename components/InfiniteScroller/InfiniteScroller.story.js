import InfiniteScroller from "./index";
import {QueryClient, QueryClientProvider} from "react-query";

const infiniteScrollerStory = {
    title: 'Components/InfiniteScroller',
    component: InfiniteScroller,
};

const mockApiCallback = async () => {
    const arr = [];
    for (let i = 0; i < 50; i++) {
        arr.push({x: Math.random()});
    }
    return arr;
};

const queryClient = new QueryClient();

export const InfiniteScrollerStory = () => (
    <QueryClientProvider client={queryClient}>
        <div style={{width: 300, height: 400, border: "1px solid black", overflow: "scroll" }}>
            <InfiniteScroller
                queryKey={"test"}
                apiCallback={mockApiCallback}
                childrenRenderer={(data) => {
                    if (!data) {
                        return null;
                    }

                    return data.pages.map(page=>{
                        return page.map(item=>{
                            return <div key={item.x} style={{borderBottom: "1px solid gray", padding: 5}}>{item.x}</div>
                        })
                    })
                }}
                lastPageController={() => false}
            />
        </div>
    </QueryClientProvider>
);

export default infiniteScrollerStory;