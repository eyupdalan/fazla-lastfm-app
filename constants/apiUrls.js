export default class ApiUrl {
    static baseURL = process.env.LAST_FM_API_URL;
    static apiKey = process.env.LAST_FM_API_KEY;

    static getTopArtists = (page, limit = 50) => {
        return `${ApiUrl.baseURL}method=chart.gettopartists&api_key=${ApiUrl.apiKey}&page=${page}&limit=${limit}&format=json`;
    }

    static getTopAlbums = (mbid, page = 1, limit = 50) => {
        return `${ApiUrl.baseURL}method=artist.gettopalbums&api_key=${ApiUrl.apiKey}&mbid=${mbid}&page=${page}&limit=${limit}&format=json`;
    }

    static getTopTracks = (mbid, page = 1, limit = 50) => {
        return `${ApiUrl.baseURL}method=artist.gettoptracks&api_key=${ApiUrl.apiKey}&mbid=${mbid}&page=${page}&limit=${limit}&format=json`;
    }
}