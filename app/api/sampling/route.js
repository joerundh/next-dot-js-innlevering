import { NextResponse } from "next/server";

import ContinuousUniform from "@/app/modules/stats/ContinuousUniform";
import DiscreteUniform from "@/app/modules/stats/DiscreteUniform.mjs";
import Geometric from "@/app/modules/stats/Geometric";
import Binomial from "@/app/modules/stats/Binomial";
import Poisson from "@/app/modules/stats/Poisson.mjs";
import Exponential from "@/app/modules/stats/Exponential.mjs";
import Normal from "@/app/modules/stats/Normal.mjs";
import Cauchy from "@/app/modules/stats/Cauchy.mjs";
import { sendError } from "next/dist/server/api-utils";

const errorObj = (str) => {
    return {
        error: str
    }   
}

const sampleMean = (arr) => arr.reduce((acc, cur) => acc + cur, 0)/arr.length;

const sampleVariance = function(arr) {
    const mean = sampleMean(arr);
    return arr.reduce((acc, cur) => acc + Math.pow(cur - mean, 2), 0)/(arr.length - 1);
}

export async function GET(request) {
    // Get the search parameters from the URL
    const searchParams = request.nextUrl.searchParams;

    const dist = String(searchParams.get("dist"));              // The distribution reference
    const count = Number(searchParams.get("count"));            // The number of samples to draw

    if (typeof count === "undefined" || isNaN(count) || Math.floor(count) !== count) {
        return NextResponse.json(errorObj("Could not parse an integer value for the number of samples."));
    }
    if (count < 0) {
        return NextResponse.json(errorObj("The number of samples to be drawn has to be non-negative."))
    }

    let ret = {};                                               // To be filled with values and returned

    // Choose a distribution object according to the provided reference
    let distObj;
    
    if (dist === "cont-unif") {
        /*
        Continuous uniform distribution
        */
        ret["name"] = "Continuous uniform distribution"
        
        const a = Number(await searchParams.get("a"));
        const b = Number(await searchParams.get("b"));

        distObj = await new ContinuousUniform(a, b);
    } else if (dist === "disc-unif") {
        /*
        Discrete uniform distribution
        */
        ret["name"] = "Discrete uniform distribution"
        
        const a = Number(await searchParams.get("a"));
        const b = Number(await searchParams.get("b"));

        distObj = new DiscreteUniform(a, b);
    } else if (dist === "geometric") {
        /*
        Geometric distribution
        */
        ret["name"] = "Geometric distribution"
        
        const p = Number(await searchParams.get("p"));

        distObj = await new Geometric(p);
    } else if (dist === "binomial") {
        /*
        Binomial distribution
        */
        ret["name"] = "Binomial distribution"
        
        const n = Number(await searchParams.get("n"));
        const p = Number(await searchParams.get("p"));

        distObj = await new Binomial(n, p);
    } else if (dist === "poisson") {
        /*
        Poisson distribution
        */
        ret["name"] = "Poisson distribution"
        
        const lambda = Number(await searchParams.get("lambda"));

        distObj = new Poisson(lambda);
    } else if (dist === "exp") {
        /*
        Exponential distribution
        */
        ret["name"] = "Exponential distribution"
        
        const lambda = Number(await searchParams.get("lambda"));

        distObj = await new Exponential(lambda);
    } else if (dist === "normal") {
        /*
        Normal distribution
        */
        ret["name"] = "Normal distribution"
        
        const mu = Number(await searchParams.get("mu"));
        const sigma = Number(await searchParams.get("sigma"));

        distObj = new Normal(mu, sigma);
    } else if (dist === "cauchy") {
        /*
        Cauchy distribution
        */
        ret["name"] = "Cauchy distribution"
        
        const x0 = Number(await searchParams.get("x0"));
        const gamma = Number(await searchParams.get("gamma"));

        distObj = new Cauchy(x0, gamma);
    } else {
        return NextResponse.json(errorObj(`Unknown probability distribution reference "${dist}".`));
    }

    // Sample from the distribution

    const samples = await distObj.samples(count);

    // Insert data into return object, and return it

    ret = {
        ...ret,
        parameters: distObj.getParams(),
        mean: distObj.mean,
        variance: distObj.variance,
        samples: samples,
        count: count,
        sample_mean: sampleMean(samples),
        sample_variance: sampleVariance(samples)
    }
    
    return NextResponse.json(ret);
}

/*
        
*/