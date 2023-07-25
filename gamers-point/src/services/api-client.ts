import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2d57f0ee419f4c169d1f2f707f7fa802'
    }
})