import Artist from "./index";
import {QueryClient, QueryClientProvider} from "react-query";

const artistStory = {
    title: 'Pages/Artist',
    component: Artist,
};

const queryClient = new QueryClient();

export const ArtistStory = () => (
    <QueryClientProvider client={queryClient}>
        <Artist/>
    </QueryClientProvider>
);

export default artistStory;