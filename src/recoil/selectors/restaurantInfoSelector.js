// import { selectorFamily } from 'recoil';
// import { sojuAtom } from '../atoms/sojuAtom';
// import axios from 'axios';

// export const restaurantInfoSelector = selectorFamily({
//     key: 'restaurantInfoSelector',
//     get: async ({ get }) => {
//         const sojuPrice = get(sojuAtom);

//         try {
//             const response = await axios.get(
//                 `http://localhost:8080/api/restaurant/info?underSojuPrice=${sojuPrice}`
//             );

//             return response.data;
//         } catch (error) {
//             console.error('Error fetching restaurant data:', error);
//             throw error;
//         }
//     },
// });
