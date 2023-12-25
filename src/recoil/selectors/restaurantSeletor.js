import { selector, useRecoilState } from 'recoil';
import axios from 'axios';


export const restaurantSelector = selector({
    key: 'restaurantSelector',
    get: async ({ get }) => {

        try {
            //api호출
            const res = await axios.get('api/restaurant/all');

            return res.data;
        } catch (error) {
            throw error;
        }
    },
});

