export default function latexToImage(str, inline = false) {
    const parameters = new URLSearchParams([
        [ "color", "#ededed" ],
        [ inline ? "inline" : "from", str ]
    ]);
    return (
        <img src={`https://math.vercel.app/?${parameters.toString()}`} alt={str} />
    );
}