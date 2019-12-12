import API from "./api"

export default class PhotoAPI extends API {

    constructor() {

        super();

        this.ApiKeys = {

            KEY: '548fcb0d0208a9a1224f0765ea3b9352',
            SECRET_KEY: '58da77fa7ae16d11',
            TAGS: '&tags=',
            URL: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=',
            PARAMS: '&tag_mode=all&sort=relevance&per_page=10&content_type=1&format=json&nojsoncallback=1'

        }

    }

    async getPhotoUrl(query) {

        const url = this.ApiKeys.URL + this.ApiKeys.KEY + this.ApiKeys.TAGS + query + this.ApiKeys.PARAMS;
        const res = await this.getJsonData(url);

        let { server, farm, secret, id } = res.photos.photo[Math.floor(Math.random() * 10)];
        const imageUrl = 'http://farm' + farm + '.static.flickr.com/' + server + '/' + id + '_' + secret + '_b.jpg';
        return imageUrl

    }

}