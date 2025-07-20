import Binomial from "@/app/modules/stats/Binomial";

export async function GET(request) {
    const params = request.nextUrl.searchParams;

    if (!params.has("n") || !params.has("p")) {
        return Response.json({ message: "Missing parameter" }, { status: 400 });
    }
    if (!params.has("count")) {
        return Response.json({ message: "Missing sample count." }, { status: 400 });
    }

    // Number of trials
    const n = Number(params.get("n"));
    if (isNaN(n) || n < 0 || Math.floor(n) !== n) {
        return Response.json({ message: "Invalid parameter." }, { status: 400 });
    }

    // Probability of success
    const p = Number(params.get("p"));
    if (isNaN(p) || p < 0 || p > 1) {
        return Response.json({ message: "Invalid parameter." }, { status: 400 });
    }

    // Number of samples
    const count = Number(params.get("count"));
    if (isNaN(count) || n < 1 || Math.floor(n) !== n) {
        return Response.json({ message: "Missing sample count." }, { status: 400 });
    }

    const dist = new Binomial(n, p);
    const data = dist.samples(count);

    const mean = data.reduce((acc, cur) => acc + cur, 0)/count;
    const variance = count === 1 ? 0 : data.map(x => Math.pow(x - mean, 2)).reduce((acc, cur) => acc + cur, 0)/(count - 1);
    
    return Response.json({
        dist: {
            name: "Binomial distribution",
            ref: "binomial"
        },
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