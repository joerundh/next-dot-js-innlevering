import Image from "next/image"

export default function Page() {
    return (
        <>
            <h2>Info</h2>
            <p>paragraph 1</p>
            <img width={25} src={`https://math.vercel.app/?${new URLSearchParams([[ "color", "#e8e8e8" ], [ "from", "x^2" ]]).toString()}`} alt="x^2" />
            <p>paragrapg 2</p>
        </>
    )
}