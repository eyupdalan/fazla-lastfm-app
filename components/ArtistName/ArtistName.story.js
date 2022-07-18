import ArtistName from "./index";

const artistListStory = {
    title: 'Components/ArtistName',
    component: ArtistName,
};

export const ArtistNameStory = () => (
    <ArtistName name={"Artist Name"} mbid={"mbidInfo"}/>
);

export default artistListStory;