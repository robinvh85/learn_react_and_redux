import axios from 'axios';

const KEY = 'AIzaSyDvCG91VZomldQRvQ_qJeO66Du8LCBM2U8';

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
});

youtube.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['part'] = 'snippet';
  config.params['type'] = 'video';
  config.params['maxResult'] = 5;
  config.params['key'] = KEY;

  return config;
});

export default youtube;
