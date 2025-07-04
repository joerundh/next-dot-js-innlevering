import Binomial from "@/app/modules/stats/Binomial";

export async function GET(request) {
    const params = request.nextUrl.searchParams;

    if (!params.has("n") || !params.has("p")) {
        return Response.json({ message: "Missing parameter" }, { status: 400 });
    }
    if (!params.has("count")) {
        return Response.json({ message: "Missing sample count." }, { status: 400 });
    }

    const n = Number(params.get("n"));
    const p = Number(params.get("p"));
    const count = Number(params.get("count"));

    const dist = new Binomial(n, p);
    const data = dist.samples(count);

    const mean = data.reduce((acc, cur) => acc + cur, 0)/count;
    const variance = count === 1 ? 0 : data.map(x => Math.pow(x - mean, 2)).reduce((acc, cur) => acc + cur, 0)/(count - 1);
    
    return Response.json({
        dist: "Binomial distribution",
        params: dist.getParams(),
        mean: n*p,
        variance: n*p*(1 - p),
        samples: {
            count: count,
            data: data,
            sample_mean: mean,
            sample_variance: variance
        }
    });
}