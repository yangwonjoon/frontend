import { selector } from 'recoil';
import axios from 'axios';

export const restaurantSelector = selector({
    key: 'restaurantSelector',
    get: async ({ get }) => {

        try {
            // 비동기 API 호출을 수행
            const res = await axios.get('http://localhost:3000/data/sample.json');
            // const data = await res.json();
            return res.data;
        } catch (error) {
            throw error;
        }
    },
    // set: ({ set }, newValue) => {
    //     set(restaurantAtom, newValue)
    // }
});
