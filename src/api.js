import axios from 'axios';

const api = axios.create({
    baseURL: 'http://200.201.206.232:6017/api/MILLENIUM!ONEUP.PRODUCAO.LISTAFASE?$format=json',

    auth: {
        username: 'oneupapi',
        password: 'mil753#@'
      },
})


export default api;
