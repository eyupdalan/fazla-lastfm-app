import Artist from "./index";

const artistStory = {
    title: 'Components/Artist',
    component: Artist,
};

export const ArtistStory = () => <Artist/>;
export const ArtistStoryWithData = () => (
    <Artist
        mbid={"test"}
        name={"Linkin Park"}
        listeners={5000}
        playCount={10000}
        image={"https://upload.wikimedia.org/wikipedia/commons/4/42/LinkinParkBerlin2010.jpg"}
    />
);

export default artistStory;