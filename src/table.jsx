import { useState } from "react"

const Table = () => {
    const [value, setValue] = useState("0")

    // 按下數字按鈕
    const clickValueBtn = (v) => {
        setValue((pre) => {
            if (pre === "0") {
                return v;
            } else {
                return pre + v;
            }
        });
    };

    // 清除所有數值
    const cleanValue = () => {
        setValue("0")
    }

    // 清除最後一位數值
    const deleteValue = (v) => {
        setValue(
            v.length === 1 ? "0" : v.slice(0, -1)
        );
    }


    return (
        <>
            <div className='grid grid-cols-4 items-center mt-40  w-fit mx-auto p-4 text-center relative'>
                <p className=" absolute -top-5 right-5 text-2xl font-bold">{value}</p>
                <p className="num_box">%</p>
                <p className="num_box">CE</p>
                <p className="num_box"
                    onClick={() => cleanValue()}
                >
                    C
                </p>
                <p className="num_box"
                    onClick={() => deleteValue(value)}
                >
                    delete
                </p>
                <p className="num_box">num</p>
                <p className="num_box">/</p>
                <p className="num_box">*</p>
                <p className="num_box">-</p>
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
                <p className="num_box row-span-2 h-full">+</p>
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
                <p className="num_box">.</p>
            </div>
        </>

    )
}

export default Table