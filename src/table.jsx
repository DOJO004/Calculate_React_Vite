import { useEffect, useState } from "react"

const Table = () => {
    const [showValue, setShowValue] = useState("0")
    const [checkDot, setCheckDot] = useState(false)
    const [checkPlus, setCheckPlus] = useState(false)
    const [checkMinus, setCheckMinus] = useState(false)

    // 按下數字按鈕
    const clickValueBtn = (v) => {
        setShowValue((pre) => {
            if (pre === "0") {
                return v;
            } else {
                return pre + v;
            }
        });
    };

    // 清除所有數值
    const cleanValue = () => {
        setShowValue("0")
        setCheckDot(false)
        setCheckPlus(false)
        setCheckMinus(false)
    }

    // 清除最後一位數值
    const deleteValue = (v) => {
        // 若最後一位數是 . 
        if (v[v.length - 1] === ".") {
            setCheckDot(false)
        }
        // 若最後一位數是 +
        if (v[v.length - 1] === "+") {
            setCheckPlus(false)
        }
        // 若最後一位數是 -
        if (v[v.length - 1] === "-") {
            setCheckMinus(false)
        }

        setShowValue(
            v.length === 1 ? "0" : v.slice(0, -1)
        );
    }

    // 添加小數點
    const addDot = () => {
        if (checkDot) {
            return
        } else {
            setShowValue((pre) => pre + ".")
            setCheckDot(true)
        }
    }

    // 按下 + 按鈕
    const plus = () => {
        if (checkPlus) {
            return
        } else {
            setShowValue((pre) => pre + "+")
            setCheckPlus(true)
        }
    }

    // 按下 - 按鈕
    const minus = () => {
        if (checkMinus) {
            return
        } else {
            setShowValue((pre) => pre + "-")
            setCheckMinus(true)
        }
    }
    return (
        <>
            <div className='grid grid-cols-4 items-center mt-40  w-fit mx-auto p-2 text-center relative shadow-md rounded-xl'>
                <p className=" absolute -top-8 right-5 text-2xl font-bold">{showValue}</p>
                <p className="num_box">%</p>
                <p className="num_box">CE</p>
                <p className="num_box"
                    onClick={() => cleanValue()}
                >
                    C
                </p>
                <p className="num_box"
                    onClick={() => deleteValue(showValue)}
                >
                    delete
                </p>
                <p className="num_box">num</p>
                <p className="num_box">/</p>
                <p className="num_box">*</p>
                <p className="num_box"
                    onClick={() => minus()}
                >
                    -
                </p>
                <p className="num_box"
                    onClick={() => clickValueBtn("7")}
                >
                    7
                </p>
                <p className="num_box"
                    onClick={() => clickValueBtn("8")}
                >
                    8
                </p>
                <p className="num_box"
                    onClick={() => clickValueBtn("9")}
                >
                    9
                </p>
                <p className="num_box row-span-2 h-full"
                    onClick={() => plus()}
                >
                    +
                </p>
                <p className="num_box"
                    onClick={() => clickValueBtn("4")}
                >
                    4
                </p>
                <p className="num_box"
                    onClick={() => clickValueBtn("5")}
                >
                    5
                </p>
                <p className="num_box"
                    onClick={() => clickValueBtn("6")}
                >
                    6
                </p>
                <p className="num_box"
                    onClick={() => clickValueBtn("1")}
                >
                    1
                </p>
                <p className="num_box"
                    onClick={() => clickValueBtn("2")}
                >
                    2
                </p>
                <p className="num_box"
                    onClick={() => clickValueBtn("3")}
                >
                    3
                </p>
                <p className="num_box row-span-2 h-full">Enter</p>
                <p className="num_box col-span-2"
                    onClick={() => clickValueBtn("0")}
                >
                    0
                </p>
                <p className="num_box"
                    onClick={() => addDot()
                    }>
                    .
                </p>
            </div>
        </>

    )
}

export default Table