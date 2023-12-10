import { selector } from 'recoil';
import axios from 'axios';


export const restaurantData = selector({
    key: 'restaurantData',
    get: async ({ get }) => {
        const res = await axios.get('http://localhost:3000/data/sample.json');
        return res.data;
    },
});
