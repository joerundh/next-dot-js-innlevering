import homFn from "@/app/utils/homFn.mjs";

export default function Exponential(lambda) {
    this.mean = 1/lambda;
    this.variance = 1/(lambda*lambda);

    this.getParams = () => {
        return {
            lambda: lambda
        }
    }

    // Probability distribution
    const f = x => lambda*Math.exp(-lambda*x);
    this.pdf = (...args) => homFn(f, ...args);

    // Sampling
    this.samples = N => [ ...new Array(N) ].map(() => -Math.log(1 - Math.random())/lambda);
}