import API from './api';

export default class PhotoAPI extends API {
    constructor() {
        super();

        this.apiKeys = {

            KEY: '548fcb0d0208a9a1224f0765ea3b9352',
            SECRET_KEY: '58da77fa7ae16d11',
            TAGS: '&tags=',
            URL: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=',
            PARAMS: '&tag_mode=all&sort=relevance&per_page=10&content_type=1&format=json&nojsoncallback=1',

        };
    }

    async getPhotoUrl(query) {
        if (!query) return;

        const url = this.apiKeys.URL + this.apiKeys.KEY + this.apiKeys.TAGS + query + this.apiKeys.PARAMS;
        const res = await this.getJsonData(url);

        const {
            server, farm, secret, id,
        } = res.photos.photo[Math.floor(Math.random() * res.photos.photo.length)];
        const imageUrl = `http://farm${farm}.static.flickr.com/${server}/${id}_${secret}_b.jpg`;
        return imageUrl;
    }
}
