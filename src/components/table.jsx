import { useState } from "react"

const Table = () => {
    const [showValue, setShowValue] = useState("0")
    const [checkDot, setCheckDot] = useState(false)
    const [calculateSymbol, setCalCulateSymbol] = useState(false)

    // 按下數字按鈕
    const clickValueBtn = (v) => {
        setShowValue((pre) => {
            if (pre === "0") {
                return v;
            } else {
                return pre + v;
            }
        });
        resetCalculateSymbol()
    };

    // 重製所有運算符號
    const resetCalculateSymbol = () => {
        setCalCulateSymbol(false)
    }

    // 清除所有數值
    const cleanValue = () => {
        setShowValue("0")
        resetCalculateSymbol()
    }

    // 按下 delete
    const deleteValue = () => {
        // 若最後一位數是 . 
        if (showValue[showValue.length - 1] === ".") {
            setCalCulateSymbol(false)
        }
        // 若最後一位數是 +
        if (showValue[showValue.length - 1] === "+") {
            setCalCulateSymbol(false)
        }
        // 若最後一位數是 -
        if (showValue[showValue.length - 1] === "-") {
            setCalCulateSymbol(false)
        }
        // 若最後一位數是 *
        if (showValue[showValue.length - 1] === "*") {
            setCalCulateSymbol(false)
        }
        // 若最後一位數是 /
        if (showValue[showValue.length - 1] === "/") {
            setCalCulateSymbol(false)
        }

        setShowValue(
            showValue.length === 1 ? "0" : showValue.slice(0, -1)
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

    // 按下運算符號
    const clickCalculateSymbol = (symbol) => {
        if (symbol === "+" && calculateSymbol === false) {
            setCalCulateSymbol(true)
            setShowValue((pre) => pre + symbol)
        }
        if (symbol === "-" && !calculateSymbol) {
            setCalCulateSymbol(true)
            setShowValue((pre) => pre + symbol)
        }
        if (symbol === "*" && !calculateSymbol) {
            setCalCulateSymbol(true)
            setShowValue((pre) => pre + symbol)
        }
        if (symbol === "/" && !calculateSymbol) {
            setCalCulateSymbol(true)
            setShowValue((pre) => pre + symbol)
        }
    }
    // 按下開根號
    const squareRoot = () => {
        setShowValue((pre) => Math.sqrt(pre))
    }

    // 按下平方
    const square = () => {
        setShowValue((pre) => pre ** 2)
    }

    // 按下百分比
    const percentage = () => {
        const lastValue = showValue.split(/(\+|\-|\*|\/)/)
        console.log();
    }

    // 按下 enter 計算答案
    const calculateAnswer = () => {
        const result = eval(showValue).toString()
        setShowValue(result)
        resetCalculateSymbol()
    }



    return (
        <>
            <div className='relative grid items-center grid-cols-4 p-2 mx-auto mt-40 text-center shadow-md w-fit rounded-xl'>
                <p className="absolute text-2xl font-bold -top-8 right-5">{showValue}</p>
                <p className="num_box"
                    onClick={() => percentage()}
                >
                    %
                </p>
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
                <p className="num_box"
                    onClick={() => square()}
                >
                    x²
                </p>
                <p className="num_box">NON</p>
                <p className="num_box">NON</p>
                <p className="num_box">NON</p>
                <p className="num_box"
                    onClick={() => squareRoot()}
                >
                    √x
                </p>
                <p className="num_box"
                    onClick={() => clickCalculateSymbol("/")}
                >
                    /
                </p>
                <p className="num_box"
                    onClick={() => clickCalculateSymbol("*")}
                >
                    *
                </p>
                <p className="num_box"
                    onClick={() => clickCalculateSymbol("-")}
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
                <p className="h-full row-span-2 num_box"
                    onClick={() => clickCalculateSymbol("+")}
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
                <p className="h-full row-span-2 num_box"
                    onClick={() => calculateAnswer()}
                >
                    Enter
                </p>
                <p className="col-span-2 num_box"
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