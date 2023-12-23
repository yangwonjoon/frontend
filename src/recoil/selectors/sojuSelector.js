// import { selector, selectorFamily } from "recoil";
// import { restaurantAtom } from '../atoms/restaurantAtom'

// export const sojuSelector = selectorFamily({
//     key: 'sojuSelector',
//     get: (price) => ({ get }) => {
//         const data = get(restaurantAtom);
//         const result = price ? data.filter((v) => v.sojuPrice === true) : data.filter((v) => v.sojuPrice === false)
//         return result
//     }
// })