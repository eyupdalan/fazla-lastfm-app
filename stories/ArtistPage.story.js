import Artist from "../pages/artist/[mbid]";
import {QueryClient, QueryClientProvider} from "react-query";

const artistPageStory = {
    title: 'Pages/Artist',
    component: Artist,
};

const queryClient = new QueryClient();

export const ArtistStory = () => (
    <QueryClientProvider client={queryClient}>
        <Artist/>
    </QueryClientProvider>
);

export default artistPageStory;