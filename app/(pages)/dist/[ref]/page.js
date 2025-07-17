import distributions from "@/app/data/distributions"
import latexToImage from "@/app/utils/latexToImage";
import parseParagraphWithLatex from "@/app/utils/parseParagraphWithLatex.mjs";
import { Fragment } from "react";

export default async function Page({ params }) {
    const { ref } = await params;

    const obj = distributions.find(x => x.ref === ref);

    if (!obj) {
        return (
            <>
                <h2>Oops!</h2>
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