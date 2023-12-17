// import { rest } from 'msw';

// export const handlers = [
//     rest.get('http://api/restaurantinfo', (req, res, ctx) => { // 요청 경로, 메서드
//         return res(
//             ctx.json(
//                 [
//                     {
//                         "id": 1,
//                         "restaurantName": "가게1",
//                         "sojuPrice": "4000",
//                         "beerPrice": "5000",
//                         "address": "서울시 마포구 서교동 ~",
//                         "category": "한식",
//                         "imageURLs": "",
//                         "bookmartCount": 0
//                     },
//                     {
//                         "id": 2,
//                         "restaurantName": "가게2",
//                         "sojuPrice": "5000",
//                         "beerPrice": "6000",
//                         "address": "서울시 마포구 서교동 ~",
//                         "category": "일식",
//                         "imageURLs": "",
//                         "bookmartCount": 0
//                     },
//                     {
//                         "id": 3,
//                         "restaurantName": "가게3",
//                         "sojuPrice": "5000",
//                         "beerPrice": "7000",
//                         "address": "서울시 마포구 서교동 ~",
//                         "category": "양식",
//                         "imageURLs": "",
//                         "bookmartCount": 0
//                     },
//                     {
//                         "id": 4,
//                         "restaurantName": "가게4",
//                         "sojuPrice": "4000",
//                         "beerPrice": "6000",
//                         "address": "서울시 마포구 서교동 ~",
//                         "category": "한식",
//                         "imageURLs": "",
//                         "bookmartCount": 0
//                     }
//                 ]
//             )
//         );
//     })
// ];