import { useEffect, useState } from "react";
import MySavedContent from "./MySavedContent";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MyPageContainer() {

  const navigate = useNavigate()
  const session = sessionStorage.getItem('user')
  const session_id = session ? JSON.parse(session).id : null;
  const [likeClicked, setLikeClicked] = useState(true);
  const [commentClicked, setCommentClicked] = useState(false);
  const [bookmark, setBookmark] = useState([])
  const [comments, setComments] = useState([])

  useEffect(() => {
    const checkBookmark = async () => {

      try {
        const bookresponse = await axios.get(`api/bookmarks?userID=${session_id}`);
        setBookmark(bookresponse.data);
        console.log(bookresponse.data);

      } catch (error) {
        console.error("checkbookmark error:", error);
      }
    };
    checkBookmark();
  }, [session_id]);

  useEffect(() => {
    const checkComment = async () => {
      try {
        const commentsResponse = await axios.get(`api/comments/mypage?userID=${session_id}`);
        setComments(commentsResponse.data)
      } catch (error) {
        console.error("comments error:", error);
      }
    };
    checkComment();
  }, [session_id]);

  return (
    <div className="mt-5 flex w-full flex-col items-center bg-[#F9F9F9] px-7 py-2">
      <div className="relative flex h-36 w-full justify-between">
        <div className="flex flex-col items-start justify-center">
          <span className="text-lg">아이디 : {JSON.parse(session).id}</span>
        </div>
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
        </>
      )}
    </div>
  );
}

export default MyPageContainer;
