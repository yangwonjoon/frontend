import { selector } from 'recoil';
import axios from 'axios';


export const restaurantSelector = selector({
    key: 'restaurantSelector',
    get: async () => {
        try {
            const res = await axios.get('api/restaurant/all');

            return res.data;
        } catch (error) {
            throw error;
        }
    },
});

