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
                        return piece["from"].map((str, i) => (
                            <span key={i} className={"inline-block flex flex-column justify-start h-1em"}>
                            {
                                latexToImage(str, true)
                            }
                            </span>
                        ));
                    }
                })
            }
        </>
    );
}