import Link from "next/link";

export default function Page() {
    return (
        <>
            <h2 className={"text-lg text-center font-bold"}>Probability distributions</h2>
            <p>A <i>stochastic variable</i> is a variable which may take one out of a set of values, but for which there is no way of knowing a priori which value it will take; one may only know or estimate something about how <i>likely</i> the variable is to take such and such a value. For example, how many people who will visit café downtown during one hour of the day, how many people will survive the next flu epidemic, whether brushing your teeth in such and such a manner will give you better oral health or just wear down your teeth faster; in fact most statements of this kind, regardless of the topic, requires statistical inferences rather than solid statements.</p>
            <p>Given one or several stochastic variables (potentially accompanied by a set of parameters), a <i>probability distribution function</i> (PDF) assigns a number to each possible set of values of the stochastic variables, indicatin how likely the given set of values are to occur. Sets of values for which the PDF has higher values, are thus more likely than others with smaller values for the same.</p>
            <p>In general, and more mathematically, a PDF must (1) be non-negative, i.e. all its values must be greater than or equal to zero (indicating no likeliness of occurrence), and (2) its sum (or integral) over all possible values of the stochastic variables must be 1 (for any given set of values for the parameters). Conversely, and strictly speaking, any function of one or several variables for which these conditions hold, can be said to constitute a probability distribution function. (If the function is non-negative, and its sum or integral over all values is finite, though not necessarily 1, it's always possible to define a PDF by dividing the function by its sum or integral, thus getting a new function whose sum or integral is 1.) </p>
            <h3 className={"font-bold"}>Information</h3>
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