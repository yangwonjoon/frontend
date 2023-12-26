// import { selector, useRecoilState } from 'recoil';
// import axios from 'axios';


// export const myBookmarkSelector = selector({
//     key: 'myBookmarkSelector',
//     get: async ({ get }) => {


//         const session = sessionStorage.getItem('user')
//         const session_id = session ? JSON.parse(session).id : null;

//         try {
//             if (session_id) {
//                 //api호출
//                 const res = await axios.get(`api/bookmarks?userID=${session_id}`);

//                 return res.data;
//             } else {
//                 console.log("no login")
//             }

//         } catch (error) {
//             throw error;
//         }
//     },
// });

