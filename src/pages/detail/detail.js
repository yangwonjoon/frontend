import { useState } from "react";
import { atom, useRecoilState, selector, useRecoilValue } from "recoil";

const scount = atom({
    key: 'count',
    default: 0
})

const xx = selector({
    key: 'xx',
    get: ({ get }) => {
        const even = get(scount);

        return even % 2 === 0 ? 'true' : 'false';
    },
})

function Detail() {

    return (
        <>
            <div>
                <h1>recoil test</h1>

                <Counter ></Counter>
                <Display></Display>
            </div>
        </>
    )
}


function Counter() {

    const [count, setCount] = useRecoilState(scount);


    return (
        <>
            <div>
                <button onClick={() => { setCount(count + 1) }}>+</button>
                {count}
            </div>
        </>
    )
}

function Display() {
    const [count, setCount] = useRecoilState(scount);
    const hi = useRecoilValue(xx)

    return (
        <>
            <div>
                {count}
                {hi}
            </div>
        </>
    )
}

export { Detail, Counter, Display };