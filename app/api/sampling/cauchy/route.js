import Cauchy from "@/app/modules/stats/Cauchy";

export async function GET(request) {
    const params = request.nextUrl.searchParams;

    if (!params.has("x0") || !params.has("gamma")) {
        return Response.json({ message: "Missing parameter" }, { status: 400 });
    }
    if (!params.has("count")) {
        return Response.json({ message: "Missing sample count." }, { status: 400 });
    }

    const x0 = Number(params.get("x0"));
    const gamma = Number(params.get("gamma"));
    const count = Number(params.get("count"));

    const dist = new Cauchy(x0, gamma);
    const data = dist.samples(count);

    const mean = data.reduce((acc, cur) => acc + cur, 0)/count;
    const variance = count === 1 ? 0 : data.map(x => Math.pow(x - mean, 2)).reduce((acc, cur) => acc + cur, 0)/(count - 1);
    
    return Response.json({
        dist: {
            name: "Cauchy distribution",
            ref: "cauchy"
        },
        params: dist.getParams(),
        samples: {
            count: count,
            data: data,
            sample_mean: mean,
            sample_variance: variance
        }
    });
}