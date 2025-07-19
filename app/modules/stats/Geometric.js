import homFn from "@/app/utils/homFn.mjs";

export default function Geometric(p) {
    this.mean = 1/p;
    this.variance = (1 - p)/(p*p);

    this.getParams = () => {
        return {
            p: p
        };
    };

    // Probability distribution
    const f = k => Math.pow(1 - p, k - 1)*p;
    this.pdf = (...args) => homFn(f, ...args);

    // Sampling
    const draw = () => Math.ceil(Math.log(1 - Math.random())/Math.log(1 - p));
    this.samples = (N) => [ ...new Array(N) ].map(() => draw());
}