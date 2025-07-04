import Exponential from "@/app/modules/stats/Exponential";

export async function GET(request) {
    const params = request.nextUrl.searchParams;

    if (!params.has("lambda")) {
        return Response.json({ message: "Missing parameter" }, { status: 400 });
    }
    if (!params.has("count")) {
        return Response.json({ message: "Missing sample count." }, { status: 400 });
    }

    const lambda = Number(params.get("lambda"));
    const count = Number(params.get("count"));

    const dist = new Exponential(lambda);
    const data = dist.samples(count);

    const mean = data.reduce((acc, cur) => acc + cur, 0)/count;
    const variance = count === 1 ? 0 : data.map(x => Math.pow(x - mean, 2)).reduce((acc, cur) => acc + cur, 0)/(count - 1);
    
    return Response.json({
        dist: "Exponential distribution",
        params: dist.getParams(),
        mean: 1/lambda,
        variance: 1/Math.pow(lambda, 2),
        samples: {
            count: count,
            data: data,
            sample_mean: mean,
            sample_variance: variance
        }
    });
}