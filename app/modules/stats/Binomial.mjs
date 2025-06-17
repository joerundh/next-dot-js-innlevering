import homFn from "@/app/utils/homFn.mjs";

export default function Binomial(n, p) {
    this.getParams = () => {
        return {
            n: n,
            p: p
        };
    };

    this.mean = n*p;;
    this.variance = n*p*(1 - p);

    // Sampling functions

    const draw = () => [ ...new Array(n) ].map(() => Math.random()).reduce((acc, cur) => cur < p ? acc + 1 : acc, 0);

    this.samples = N => [ ...new Array(N) ].map(() => draw());
}