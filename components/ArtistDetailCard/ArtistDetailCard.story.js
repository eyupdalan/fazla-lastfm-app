import ArtistDetailCard from "./index";

const artistDetailCardStory = {
    title: 'Components/ArtistDetailCard',
    component: ArtistDetailCard,
};

export const ArtistDetailCardStory = () => (
    <ArtistDetailCard
        artist={"test"}
        name={"test"}
        image={"https://upload.wikimedia.org/wikipedia/commons/4/42/LinkinParkBerlin2010.jpg"}
        mbid={"test"}
        playCount={1000}
        listeners={2000}
    />
);
export const ArtistDetailCardStoryWithoutListeners = () => (
    <ArtistDetailCard
        artist={"test"}
        name={"test"}
        image={"https://upload.wikimedia.org/wikipedia/commons/4/42/LinkinParkBerlin2010.jpg"}
        mbid={"test"}
        playCount={1000}
    />
);

export default artistDetailCardStory;