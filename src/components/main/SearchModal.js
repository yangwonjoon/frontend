import React, { useState } from "react";
import { useRecoilState } from "recoil";

function SearchModal({ onCancelClick }) {

    const [searchQuery, setSearchQuery] = useState("");
    //const [searchAt, setSearchAt] = useRecoilState("");

    const handleContainerClick = (e) => {
        e.stopPropagation();
    };

    const handleSearch = () => {

        //setSearchAt(searchQuery)
        console.log(searchQuery)

    };

    return (
        <div
            className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50"
            onClick={onCancelClick}
        >
            <div
                className="absolute left-1/2 top-6 flex h-10 w-96 -translate-x-1/2 transform items-center justify-start rounded-3xl bg-[#ffffff]"
                onClick={handleContainerClick}
            >
                <input
                    type="text"
                    placeholder="가게이름을 입력하세요."
                    className="ml-4 w-80 text-lg outline-none placeholder:font-bold"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="ml-2" onClick={handleSearch}>
                    검색
                </button>
            </div>
        </div>
    );
}

export default SearchModal;
