import homFn from "@/app/utils/homFn.mjs";

function binom(n, k) {
    // Function to compute binomial coefficients without division error
    if (k < 0 || k > n) {
        return 0;
    }
    if (k === 0 || k === n) {
        return 1;
    }
    const r = Math.min(k, n - k);

    const R = [ ...new Array(r - 1) ].map((x, index) => r - index);
    const N = [ ...new Array(r) ].map((x, index) => n - index);

    for (let i = 0; i < r - 1; i++) {
        for (let ii = 0; ii < r; ii++) {
            if (N[ii] % R[i]) {
                continue;
            }
            N[ii] = N[ii] / R[i];
            R[i] = 1;
            break;
        }
    }
    return N.reduce((acc, cur) => acc*cur, 1)/R.reduce((acc, cur) => acc*cur, 1);
}

export default function Binomial(n, p) {
    this.mean = n*p;;
    this.variance = n*p*(1 - p);

    this.getParams = () => {
        return {
            n: n,
            p: p
        };
    };

    // Probability distribution
    const f = k => binom(n, k)*Math.pow(p, k)*Math.pow(1 - p, n - k);
    this.pdf = (...args) => homFn(f, ...args);

    // Sampling functions

    const draw = () => [ ...new Array(n) ].map(() => Math.random()).reduce((acc, cur) => cur < p ? acc + 1 : acc, 0);

    this.samples = N => [ ...new Array(N) ].map(() => draw());
}