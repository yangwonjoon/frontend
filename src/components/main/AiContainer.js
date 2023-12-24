import ramen from "../../assets/ramenSample.jpg";
import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import picture from "../../assets/picture.svg";
import AiSearching from "../../assets/AiSearching.png"

function AiContainer() {
    const [aiState, setAIState] = useState("Not Started");
    const [uploadedImage, setUploadedImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];

        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();

            // 파일 읽기가 성공적으로 완료되면 실행될 콜백 함수
            reader.onload = () => {
                setUploadedImage(reader.result);
                setAIState("In Progress");
            };

            // 파일 읽기 오류 처리
            reader.onerror = () => {
                console.log("file reading has failed");
                setUploadedImage(null);
            };

            // 파일을 Data URL 형식으로 읽기
            reader.readAsDataURL(file);
        } else {
            console.log("No image file selected");
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    useEffect(() => {
        if (aiState === "In Progress") {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                setAIState("Done");
            }, 10000);
        }
    }, [aiState]);

    return (
        <>
            {/* AI 검색 시작 전 */}
            {aiState === "Not Started" && (
                <div className="relative mt-4 flex h-96 w-full flex-col items-center justify-center space-y-5 bg-white">
                    <div
                        className="mb-5 flex h-60 w-[500px] items-center justify-center bg-[#e0e0e0] hover:cursor-pointer"
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        {isDragActive ? (
                            <span className="text-lg">이미지를 드롭해주세요.</span>
                        ) : (
                            <img src={picture} alt="picture" className="w-28" />
                        )}
                    </div>
                    <button
                        {...getRootProps()}
                        className="absolute bottom-6 right-8 h-8 w-28 rounded-2xl border-[1.5px] border-black bg-[#D9D9D9] font-medium"
                    >
                        업로드
                    </button>
                </div>
            )}
            {/* Ai 검색 중 */}
            {aiState === "In Progress" && isLoading && (
                <div className="mt-4 flex h-96 w-full items-center justify-center space-y-5 bg-white ">
                    <img src={AiSearching} alt="loading" className="flex w-20" />
                    <div className="ml-4 flex flex-col items-center">
                        <span className="flex tracking-wider">
                            Ai가 이미지를 검색중입니다!
                        </span>
                        <span className="flex tracking-wider">잠시만 기다려주세요!!!</span>
                    </div>
                </div>
            )}
            {/* AI 검색을 마쳤을 때 */}
            {aiState === "Done" && (
                <div className="mt-4 flex h-96 w-full flex-col items-center justify-center space-y-5 bg-white ">
                    <img
                        src={uploadedImage}
                        alt="ramen"
                        className="h-[150px] w-[300px]"
                    />
                    <span className="tracking-wider">
                        '라멘' '일식'과 관련된 추천 가게입니다.
                    </span>
                    <button
                        className="h-8 w-44 rounded-2xl border-[1.5px] border-black bg-[#D9D9D9] font-medium"
                        onClick={() => {
                            setAIState("Not Started");
                        }}
                    >
                        다시 Ai검색
                    </button>
                </div>
            )}
        </>
    );
}

export default AiContainer;