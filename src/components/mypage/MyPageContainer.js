import { useEffect, useState } from "react";
import MySavedContent from "./MySavedContent";
import MyCommentContent from "../common/MyCommentContent";
import pencil from "../../assets/pencil.svg";
import cancel from "../../assets/cancel.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { myBookmarkSelector } from "../../recoil/selectors/myBookmarkSelector";

function MyPageContainer() {

  const navigate = useNavigate()
  const session = sessionStorage.getItem('user')
  const session_id = session ? JSON.parse(session).id : null;

  const [likeClicked, setLikeClicked] = useState(true);
  const [commentClicked, setCommentClicked] = useState(false);
  const [bookmark, setBookmark] = useState([])

  useEffect(() => {
    const checkBookmark = async () => {

      try {
        const response = await axios.get(`api/bookmarks?userID=${session_id}`);
        setBookmark(response.data);


      } catch (error) {
        console.error("checkbookmark error:", error);
      }
    };

    checkBookmark();
  }, [session_id]);
  // const [myBookmarkSel, SetMyBookmarkSel] = useRecoilState(myBookmarkSelector)


  return (
    <div className="mt-5 flex w-full flex-col items-center bg-[#F9F9F9] px-7 py-2">
      <div className="relative flex h-36 w-full justify-between">
        <div className="flex flex-col items-start justify-center">
          <span className="text-lg">아이디 : {JSON.parse(session).id}</span>
          <span className="text-lg">닉네임 : nickname123</span>
        </div>
        <img
          src={pencil}
          alt="pencil"
          className="mr-6 w-4 hover:cursor-pointer"
        />

      </div>
      {likeClicked && !commentClicked ? (
        <>
          <div className="mb-2 flex h-12 w-full overflow-hidden bg-[#DCDCDC]">
            <div
              className="ml-3 mt-2 flex h-12 w-32 items-start justify-center rounded-md bg-[#F7F7F7] hover:cursor-pointer"
              onClick={() => {
                setLikeClicked(true);
                setCommentClicked(false);
              }}
            >
              <span className="mt-2 text-lg">내가 찜한 가게</span>
            </div>
            <div
              className="ml-2 mt-2 flex h-12 w-32 items-start justify-center rounded-md bg-[#DCDCDC] hover:cursor-pointer"
              onClick={() => {
                setLikeClicked(false);
                setCommentClicked(true);
              }}
            >
              <span className="mt-3 text-lg">내가 쓴 댓글</span>
            </div>
          </div>
          {
            bookmark.map(function (a, i) {
              return (
                <MySavedContent data={bookmark} i={i} key={i} />
              )
            })
          }




        </>
      ) : (
        <>
          <div className="mb-2 flex h-12 w-full overflow-hidden bg-[#DCDCDC]">
            <div
              className="ml-2 mt-2 flex h-12 w-32 items-start justify-center rounded-md bg-[#DCDCDC] hover:cursor-pointer"
              onClick={() => {
                setLikeClicked(true);
                setCommentClicked(false);
              }}
            >
              <span className="mt-3 text-lg">내가 찜한 가게</span>
            </div>
            <div
              className="ml-2 mt-2 flex h-12 w-32 items-start justify-center rounded-md bg-[#F7F7F7] hover:cursor-pointer"
              onClick={() => {
                setLikeClicked(false);
                setCommentClicked(true);
              }}
            >
              <span className="mt-2 text-xl">내가 쓴 댓글</span>
            </div>
          </div>
          <MyCommentContent />
          <MyCommentContent />
          <MyCommentContent />
          <MyCommentContent />
        </>
      )}
    </div>
  );
}

export default MyPageContainer;
