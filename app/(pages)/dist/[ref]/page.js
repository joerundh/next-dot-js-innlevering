import distributions from "@/app/data/distributions"
import latexToImage from "@/app/utils/latexToImage";
import parseParagraphWithLatex from "@/app/utils/parseParagraphWithLatex.mjs";
import Link from "next/link";
import { Fragment } from "react";

export default async function Page({ params }) {
    const { ref } = await params;

    const obj = distributions.find(x => x.ref === ref);

    if (!obj) {
        return (
            <>
                <h2></h2>
                <p>No info found on a distribution with the provided reference.</p>
            </>
        )
    }

    const tableValue = value => {
        if (typeof value === "object") {
            if (value["type"] === "latex") {
                if (value["from"] instanceof Array) {
                    return value["from"].map((str, index) => (
                        <Fragment key={index}>
                            { index > 0 ? <span className={"mr-2"}>,</span> : <></>} {latexToImage(str)}
                        </Fragment>
                    ));
                }
                return latexToImage(value["from"]);
            }
        } else {
            return String(value);
        }
    }

    return (
        <>
            <div>
                <ul className={"flex flex-row justify-between items-center px-2 text-xs"}>
                    <li>
                        {
                            ref === "continuous" ? 
                                <b>Continuous Uniform</b>
                            :
                                <Link href={"/dist/continuous"} className={"hover:underline"}>Continuous Uniform</Link>
                        }
                    </li>
                    <li>
                        {
                            ref === "discrete" ? 
                                <b>Discrete Uniform</b>
                            :
                                <Link href={"/dist/discrete"} className={"hover:underline"}>Discrete Uniform</Link>
                        }
                    </li>
                    <li>
                        {
                            ref === "geometric" ? 
                                <b>Geometric</b>
                            :
                                <Link href={"/dist/geometric"} className={"hover:underline"}>Geometric</Link>
                        }
                    </li>
                    <li>
                        {
                            ref === "binomial" ? 
                                <b>Binomial</b>
                            :
                                <Link href={"/dist/binomial"} className={"hover:underline"}>Binomial</Link>
                        }
                    </li>
                    <li>
                        {
                            ref === "poisson" ? 
                                <b>Poisson</b>
                            :
                                <Link href={"/dist/poisson"} className={"hover:underline"}>Poisson</Link>
                        }
                    </li>
                    <li>
                        {
                            ref === "exponential" ? 
                                <b>Binomial</b>
                            :
                                <Link href={"/dist/exponential"} className={"hover:underline"}>Exponential</Link>
                        }
                    </li>
                    <li>
                        {
                            ref === "normal" ? 
                                <b>Normal</b>
                            :
                                <Link href={"/dist/normal"} className={"hover:underline"}>Normal</Link>
                        }
                    </li>
                </ul>
            </div>
            <h2 className={"text-center text-lg font-bold"}>{obj["name"]}</h2>
            {
                obj["description"].map((par, index) => (
                    <Fragment key={index}>
                        { par["subheader"] ? <h3>{parseParagraphWithLatex(par["subheader"])}</h3> : <></> }
                        <p key={index}>
                            {
                                parseParagraphWithLatex(...par["pieces"])
                            }
                        </p>
                    </Fragment>
                ))
            }
            <center>Basic properties:</center>
            <div className={"grid grid-cols-[auto_auto] gap-x-2"}>
                {
                    obj["info"].map(({ key, value }, index) => (
                        <Fragment key={index}>
                            <div className="p-1 flex flex-col justify-center">{key}:</div>
                            <div className="p-1 flex flex-row justify-start items-center">{tableValue(value)}</div>
                        </Fragment>
                    )) 
                }
            </div>
        </>
    )
}