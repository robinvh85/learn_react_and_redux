import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID b21YIuH94Qr6i_UxaYiz-8q16vWTidSTZZ2Sm_F-uoo'
  }
});
