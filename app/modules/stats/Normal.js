import homFn from "@/app/utils/homFn.mjs";

export default function Normal(mu, sigma) {
    this.mean = mu;
    this.variance = sigma*sigma;

    this.getParams = () => {
        return {
            mu: mu,
            sigma: sigma
        }
    }

    // Probability distribution
    const f = x => Math.exp(-Math.pow((x - mu)/sigma, 2)/2)/Math.sqrt(2*Math.PI*sigma*sigma);
    this.pdf = (...args) => homFn(f, ...args);

    // Sampling
    const draw = () => mu + Math.sqrt(-2*Math.log(1 - Math.random()))*sigma*Math.cos(2*Math.PI*Math.random());
    this.samples = N => [ ...new Array(N) ].map(() => draw());
}