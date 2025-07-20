import Link from "next/link";

export default function Page() {
    return (
        <>
            <h2 className={"text-lg text-center font-bold"}>Probability distributions</h2>
            <p>Use the links below to see information about the avaible probability distributions:</p>
            <ul className={"flex flex-col gap-2 px-3"}>
                <li className={"list-['-'] px-2"}>
                    <Link href={"/dist/continuous"} className={"font-bold"}>Continuous uniform distribution</Link>
                </li>
                <li className={"list-['-'] px-2"}>
                    <Link href={"/dist/discrete"} className={"font-bold"}>Discrete uniform distribution</Link>
                </li>
                <li className={"list-['-'] px-2"}>
                    <Link href={"/dist/geometric"} className={"font-bold"}>Geometric distribution</Link>
                </li>
                <li className={"list-['-'] px-2"}>
                    <Link href={"/dist/binomial"} className={"font-bold"}>Binomial distribution</Link>
                </li>
                <li className={"list-['-'] px-2"}>
                    <Link href={"/dist/poisson"} className={"font-bold"}>Poisson distribution</Link>
                </li>
                <li className={"list-['-'] px-2"}>
                    <Link href={"/dist/exponential"} className={"font-bold"}>Exponential distribution</Link>
                </li>
                <li className={"list-['-'] px-2"}>
                    <Link href={"/dist/normal"} className={"font-bold"}>Normal distribution</Link>
                </li>
            </ul>
        </>
    )
}