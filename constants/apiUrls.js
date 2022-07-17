export default class ApiUrl{
    static getTopArtists = (page, limit=50) => {
        return `${process.env.LAST_FM_API_URL}method=chart.gettopartists&api_key=${process.env.LAST_FM_API_KEY}&page=${page}&limit=${limit}&format=json`;
    }
}