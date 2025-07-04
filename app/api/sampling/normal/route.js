import Normal from "@/app/modules/stats/Normal";

export async function GET(request) {
    const params = request.nextUrl.searchParams;

    if (!params.has("mu") || !params.has("sigma")) {
        return Response.json({ message: "Missing parameter" }, { status: 400 });
    }
    if (!params.has("count")) {
        return Response.json({ message: "Missing sample count." }, { status: 400 });
    }

    const mu = Number(params.get("mu"));
    const sigma = Number(params.get("sigma"));
    const count = Number(params.get("count"));

    const dist = new Normal(mu, sigma);
    const data = dist.samples(count);

    const mean = data.reduce((acc, cur) => acc + cur, 0)/count;
    const variance = count === 1 ? 0 : data.map(x => Math.pow(x - mean, 2)).reduce((acc, cur) => acc + cur, 0)/(count - 1);
    
    return Response.json({
        dist: "Normal distribution",
        params: dist.getParams(),
        mean: mu,
        variance: Math.pow(sigma, 2),
        samples: {
            count: count,
            data: data,
            sample_mean: mean,
            sample_variance: variance
        }
    });
}