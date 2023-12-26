import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import star from "../../assets/star.svg";
import filledStar from "../../assets/filled_star.svg";
import cancel from "../../assets/cancel.svg";
import upArrow from "../../assets/up_arrow.svg";
import downArrow from "../../assets/down_arrow.svg";
import KakaoMap from "../common/KakaoMap";
import { userAtom } from "../../recoil/atoms/userAtom";

import { useRecoilValue } from "recoil";
import { detailAtom } from "../../recoil/atoms/detailAtom";
import axios from "axios";


function DetailContainer() {

    const session = sessionStorage.getItem('user')
    const session_id = session ? JSON.parse(session).id : null;

    const navigate = useNavigate();
    //해당 가게 데이터
    const detailAt = useRecoilValue(detailAtom);
    const [arrowClicked, setArrowClicked] = useState(false);
    const [starCliked, setStartClicked] = useState(false);

    //댓글쓰기란
    const arrowClickedHandler = () => {
        setArrowClicked(!arrowClicked);
    };

    //찜, 별점
    const saveClickHandler = () => {
        setStartClicked((prevState) => !prevState);
    };

    const [commentContent, setCommentContent] = useState("");
    const [comments, setComments] = useState([]);

    const postCommentHandler = async () => {
        console.log(comments)
        try {
            const response = await axios.post("/api/comments", {
                userID: session_id,
                restaurant_seq: detailAt.restaurant_seq,
                content: commentContent,
            });
            console.log(response.data)
            if (response.data.status === "success") {
                fetchComments();
                setCommentContent("");
            } else {
                console.error("Failed to post comment:", response.data);
            }
        } catch (error) {
            console.error("Error posting comment:", error);
        }
    };


    const fetchComments = async () => {
        try {
            const response = await axios.get(`/api/comments?restaurant_seq=${detailAt.restaurant_seq}`);
            setComments(response.data);
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };

    useEffect(() => {
        // Fetch comments when the component mounts
        fetchComments();
    }, [detailAt.restaurant_seq]);

    return (
        <div className="mt-5 flex w-full flex-col items-center bg-[#F9F9F9] p-7">
            <div className="flex w-full items-center justify-between">
                <div className="flex items-center">
                    <img
                        src={starCliked ? filledStar : star}
                        alt="star"
                        className="w-6 hover:cursor-pointer"
                        onClick={saveClickHandler}
                    />
                    <div className="flex items-end">
                        <span className="ml-3 text-2xl text-[#325FFF] hover:cursor-pointer">
                            {detailAt.restaurantName}
                        </span>
                        <span className="ml-2 text-sm text-[#5A5A5A]">
                            {detailAt.category}
                        </span>
                        <div className="ml-2 flex items-center">
                            <img src={filledStar} alt="star" className="w-3" />
                            <span className="ml-1 text-sm">{detailAt.bookmarkCount}</span>
                        </div>
                    </div>
                </div>
                {/* 닫기 */}
                <img src={cancel} alt="cancel" className="w-5 hover:cursor-pointer" onClick={() => { navigate('/') }} />

            </div>
            <div className="mt-3 grid w-full grid-cols-2 gap-4">
                {detailAt.imageURLs.map((url, i) => (
                    <img
                        key={i}
                        src={url}
                        alt={`img${i + 1}`}
                        className="w-full hover:cursor-pointer"
                    />
                ))}

            </div>
            <div className="mt-3 flex w-full items-center justify-start">
                <div className="flex h-8 w-32 items-center justify-center rounded-xl border-[1px] bg-[#CCE7D0] text-sm">
                    소주가격: {detailAt.sojuPrice}
                </div>
                <div className="ml-2 flex h-8 w-32 items-center justify-center rounded-xl border-[1px] bg-[#e8e6b1] text-sm">
                    맥주가격: {detailAt.beerPrice}
                </div>
            </div>
            <div className="mt-4 flex w-full flex-col items-start">
                <span className="text-lg font-medium text-[#444444]">
                    영업시간 :{detailAt.businessHours}
                </span>
                <span className="mt-4 text-lg font-medium text-[#444444]">
                    주소: {detailAt.address}
                </span>
            </div>


            <KakaoMap></KakaoMap>


            <div className="mt-4 w-full border-t-2">
                <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="text-xl font-medium">댓글</span>
                        {arrowClicked ? (
                            <img src={downArrow} alt="down_arrow" className="ml-2 w-4" />
                        ) : (
                            <img src={upArrow} alt="up_arrow" className="ml-2 w-4" />
                        )}
                    </div>
                    <div
                        className="flex h-7 w-24 items-center justify-center rounded-lg border-[1px] border-[#5A5A5A] bg-[#D9D9D9] text-sm hover:cursor-pointer"
                        onClick={() => {
                            arrowClickedHandler();
                        }}
                    >
                        댓글 쓰기
                    </div>
                </div>
                {arrowClicked && (
                    <div className="mt-4 flex h-48 rounded-lg border-[1px] border-[#5A5A5A] bg-[#EFEFEF] p-4">
                        {/* <div className="relative flex h-full basis-11/12 items-start">
              <span className="flex w-1/6 items-center justify-center text-sm text-[#5A5A5A]">
                sulrijoah123
              </span>
              <textarea
                placeholder="300자 이내로 댓글을 작성하세요."
                className="mx-3 h-full w-5/6 bg-[#EFEFEF] text-sm font-medium text-[#5A5A5A] outline-none"
              ></textarea>
              <span className="absolute bottom-0 right-6 text-sm text-[#5A5A5A]">
                0 / 300자
              </span>
            </div>
            <div className="flex basis-1/12">
              <div className="flex h-6 w-11 items-center justify-center rounded-lg border-[1px] border-[#5A5A5A] bg-[#D9D9D9] text-xs hover:cursor-pointer">
                등록
              </div>
            </div> */}
                        <div className="relative flex h-full basis-11/12 items-start">
                            <span className="flex w-1/6 items-center justify-center text-sm text-[#5A5A5A]">
                                {session_id ? JSON.parse(session).id : "Guest User"}
                            </span>
                            <textarea
                                placeholder="300자 이내로 댓글을 작성하세요."
                                value={commentContent}
                                onChange={(e) => setCommentContent(e.target.value)}
                                className="mx-3 h-full w-5/6 bg-[#EFEFEF] text-sm font-medium text-[#5A5A5A] outline-none"
                            ></textarea>
                            <span className="absolute bottom-0 right-6 text-sm text-[#5A5A5A]">
                                {commentContent.length} / 300자
                            </span>
                        </div>
                        <div className="flex basis-1/12">
                            <div
                                className="flex h-6 w-11 items-center justify-center rounded-lg border-[1px] border-[#5A5A5A] bg-[#D9D9D9] text-xs hover:cursor-pointer"
                                onClick={postCommentHandler}
                            >
                                등록
                            </div>
                        </div>
                    </div>
                )}
                <div className="mt-6">
                    {comments.map((comment, index) => (
                        <div key={index} className="flex flex-col items-start">
                            <span className="text-sm">{comment.userID}</span>
                            <div className="mb-2 ml-1 mt-1 flex h-9 w-full items-center justify-between rounded-lg bg-[#EFEFEF] px-3">
                                <span className="text-sm">{comment.content}</span>
                                <button
                                    type="button"
                                    className="flex h-7 w-12 items-center justify-center rounded-lg border-[1px] border-[#CFCFCF] bg-[#F3F3F3] text-sm text-[#2C2C2C]"
                                >
                                    수정
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DetailContainer;
