import homFn from "@/app/utils/homFn.mjs";

const cot = x => Math.cos(x)/Math.sin(x)

export default function Cauchy(x0, gamma) {
    this.mean = undefined;
    this.variance = undefined;

    this.getParams = () => {
        return {
            x0: x0,
            gamma: gamma
        }
    }

    // Probability distribution
    const f = x => (1/Math.PI)*gamma/(Math.pow(x - x0, 2) + Math.pow(gamma, 2))
    this.pdf = (...args) => homFn(f, ...args);

    // Sampling function
    this.samples = N => [ ...new Array(N) ].map(() => x0 - gamma*cot(Math.PI*Math.random()))
}