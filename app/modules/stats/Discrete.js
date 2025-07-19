import homFn from "@/app/utils/homFn.mjs";

export default function Discrete(a, b) {
    const n = b - a + 1;
    this.mean = (a + b)/2;
    this.variance = (n*n - 1)/12;

    this.getParams = () => {
        return {
            a: a,
            b: b
        }
    }

    // Probability distribution
    this.pdf = (...args) => homFn(() => 1/n, ...args);

    // Sampling
    const draw = () => a + Math.floor(n*Math.random());
    this.samples = N => [ ...new Array(N) ].map(() => draw());
}