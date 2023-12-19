/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import category from "../assets/category.svg";
import axios from "axios";

function valuetext(value) {
    return `${value}원`;
}

const minDistance = 1000;

function Nav() {

    const navigate = useNavigate()
    //초기값
    const [value1, setValue1] = useState([3000, 8000]);

    const handleChange1 = (event, newValue, activeThumb) => {

        console.log(newValue);
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };


    // //클릭한 nav 소주 가격 sojuatom에 저장
    // async function sojuHandler(e) {
    //     e.preventDefault();
    //     const price = e.currentTarget.dataset.value;

    //     await axios.get(`http://localhost:8080/api/restaurant/info?underSojuPrice=${price}`)
    //         .then(response => {
    //             // 필터링 된 데이터로 메인 페이지 업데이트
    //             navigate('/', { state: { filteredData: response.data } });
    //             console.log(response.data)
    //         })
    //         .catch(error => {
    //             console.error("데이터 가져오기 오류:", error);
    //         });

    // }

    return (

        <div className="mt-7 flex w-full items-center justify-between pb-3 pl-7">
            <div className="flex h-12 items-start">
                <span className="mr-3 mt-[2px] flex text-lg font-medium text-[#302f2f]">
                    소주 가격
                </span>
                <div className="flex flex-col items-center justify-center">
                    <Box className="flex w-[24rem]">
                        <Slider
                            sx={{
                                color: "#52af77",
                                height: 8,
                                paddingTop: 1,
                                marginBottom: 1,
                                "& .MuiSlider-track": {
                                    border: "none",
                                },
                                "& .MuiSlider-thumb": {
                                    height: 24,
                                    width: 24,
                                    backgroundColor: "#fff",
                                    border: "2px solid currentColor",
                                    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
                                        boxShadow: "inherit",
                                    },
                                    "&:before": {
                                        display: "none",
                                    },
                                },
                                "& .MuiSlider-valueLabel": {
                                    lineHeight: 1.2,
                                    fontSize: 12,
                                    background: "unset",
                                    padding: 0,
                                    width: 32,
                                    height: 32,
                                    borderRadius: "50% 50% 50% 0",
                                    backgroundColor: "#52af77",
                                    transformOrigin: "bottom left",
                                    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
                                    "&:before": { display: "none" },
                                    "&.MuiSlider-valueLabelOpen": {
                                        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
                                    },
                                    "& > *": {
                                        transform: "rotate(45deg)",
                                    },
                                },
                            }}
                            //aria-label="pretto slider"

                            getAriaLabel={() => "Minimum distance"}
                            value={value1}
                            onChange={handleChange1}
                            getAriaValueText={valuetext}
                            disableSwap
                            min={3000}
                            max={8000}
                            step={1000}
                        />
                    </Box>
                    <div className="flex w-[26rem] justify-between">
                        <span className="text-xs text-[#080707]">{value1[0]}원</span>
                        <span className="text-xs text-[#080707]">{value1[1]}원</span>

                        <div className="flex items-center space-x-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#5a5a5a] hover:cursor-pointer">
                                <span className="font-semibold text-[#5a5a5a]">AI</span>
                            </div>
                            <img
                                src={category}
                                alt="category"
                                className="w-11 hover:cursor-pointer"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;
