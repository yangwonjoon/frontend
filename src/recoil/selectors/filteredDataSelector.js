import { selector, useRecoilValue } from "recoil";
import { menuAtom } from "../atoms/menuAtom";
import axios from "axios";


export const filteredDataSelector = selector({
    key: 'filterDataSelector',
    get: async ({ get }) => {

        try {
            //api호출
            const baseUrl = `api/restaurant/info?`
            const plusParams = [];

            const menuAt = get(menuAtom)

            const moresoju = menuAt.moresoju
            const undersoju = menuAt.undersoju
            const category = menuAt.category
            const moreBeer = menuAt.moreBeer
            const underBeer = menuAt.underBeer

            if (moresoju) {
                plusParams.push(`moreSojuPrice=${moresoju}`)
            }
            if (undersoju) {
                plusParams.push(`underSojuPrice=${undersoju}`)
            }
            if (category) {
                plusParams.push(`category=${category}`);
            }
            if (moreBeer) {
                plusParams.push(`moreBeerPrice=${moreBeer}`);
            }
            if (underBeer) {
                plusParams.push(`underBeerPrice=${underBeer}`);
            }

            const fullUrl = `${baseUrl}&${plusParams.join("&")}`;
            const response = await axios.get(fullUrl)

            return response.data;
        } catch (error) {
            console.error("데이터 가져오기 오류:", error);
            return [];
        }
    }
})