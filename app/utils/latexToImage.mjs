export default function latexToImage(str, inline=false, className="") {
    const parameters = new URLSearchParams([[ "color", "#ededed" ], [ inline ? "inline" : "from", str ]]);
    return (
        <img src={`https://math.vercel.app/?${parameters.toString()}`} className={`${inline ? "inline " : ""} ${className}`} alt={`${str}`} />
    );
}