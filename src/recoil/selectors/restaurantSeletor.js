import { selector, useRecoilState } from 'recoil';
import axios from 'axios';
import { restaurantAtom } from '../atoms/restaurantAtom';

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

