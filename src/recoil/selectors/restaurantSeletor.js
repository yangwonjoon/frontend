import { selector } from 'recoil';
import axios from 'axios';

export const restaurantSelector = selector({
    key: 'restaurantSelector',
    get: async ({ get }) => {

        try {
            //api호출
            const res = await axios.get('http://localhost:3000/data/sample.json');

            return res.data;
        } catch (error) {
            throw error;
        }
    },
});
