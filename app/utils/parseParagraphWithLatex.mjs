import { Fragment } from "react";
import latexToImage from "./latexToImage.mjs";

export default function parseParagraphWithLatex(...pieces) {
    return (
        <>
            {
                pieces.map((piece, index) => {
                    if (typeof piece === "string") {
                        return (
                            <span key={index}>{piece}</span>
                        )
                    }
                    if (typeof piece === "object" && piece["type"] === "latex") {
                        return <span key={index} className={"inline-block grid h-[1em] place-center"}>
                            {
                                latexToImage(piece["from"], true)
                            }
                        </span>
                    }
                })
            }
        </>
    );
}