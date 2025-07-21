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
                            <span key={i} className={"inline-block h-fit w-fit translate-y-[30%]"}>
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