import axios from 'axios';

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer cSrTS3OWfmaKRJG03II2aawFrJ_uk1rPx7K9C17MrUnOu8fEUDDDQkS3n_AhrhqllCjshZU1O_HCLuxXx60rSlzgYNmkgCwYXjVhN-u7RBVNOWSMMRlq9u0qWxMDX3Yx'
    }
});
