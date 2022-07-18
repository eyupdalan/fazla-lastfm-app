import ArtistList from "./index";

const artistListStory = {
    title: 'Components/ArtistList',
    component: ArtistList,
};

export const ArtistListStory = () => (
    <ArtistList
        data={[
            {
                artist: "test",
                name: "test",
                image: [{"#text": "https://upload.wikimedia.org/wikipedia/commons/4/42/LinkinParkBerlin2010.jpg"}],
                mbid: "test",
                playcount: 1000,
                listeners: 2000,
            },
            {
                artist: "deneme",
                name: "deneme",
                image: [{"#text": "https://upload.wikimedia.org/wikipedia/commons/4/42/LinkinParkBerlin2010.jpg"}],
                mbid: "deneme",
                playcount: 5000,
                listeners: 7000,
            }
        ]}
    />
);

export default artistListStory;