import homFn from "@/app/utils/homFn.mjs";

const cot = x => Math.cos(x)/Math.sin(x)

export default function Cauchy(x0, gamma) {
    this.getParams = () => {
        return {
            x0: x0,
            gamma: gamma
        }
    }

    this.mean = undefined;
    this.variance = undefined;

    this.samples = N => [ ...new Array(N) ].map(() => x0 - gamma*cot(Math.PI*Math.random()))
}