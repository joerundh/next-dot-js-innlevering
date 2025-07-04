import Continuous from "@/app/modules/stats/Continuous";

export async function GET(request) {
    const params = request.nextUrl.searchParams;

    if (!params.has("a") || !params.has("b")) {
        return Response.json({ message: "Missing parameter" }, { status: 400 });
    }
    if (!params.has("count")) {
        return Response.json({ message: "Missing sample count." }, { status: 400 });
    }

    const a = Number(params.get("a"));
    const b = Number(params.get("b"));
    const count = Number(params.get("count"));

    const dist = new Continuous(a, b);
    const data = dist.samples(count);

    const mean = data.reduce((acc, cur) => acc + cur, 0)/count;
    const variance = count === 1 ? 0 : data.map(x => Math.pow(x - mean, 2)).reduce((acc, cur) => acc + cur, 0)/(count - 1);
    
    return Response.json({
        dist: "Continuous uniform distribution",
        params: dist.getParams(),
        mean: (a + b)/2,
        variance: Math.pow(b - a, 2)/12,
        samples: {
            count: count,
            data: data,
            sample_mean: mean,
            sample_variance: variance
        }
    });
}