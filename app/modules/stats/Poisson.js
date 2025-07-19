import homFn from "@/app/utils/homFn.mjs";

function invFac(n) {
    if (n < 0) {
        return 0;
    }
    if (n === 0 || n === 1) {
        return 1;
    }

    let ret = 1;
    for (let k = 2; k <= n; k++) {
        ret /= k;
    }
    return ret;
}

export default function Poisson(lambda) {
    this.mean = lambda;
    this.variance = lambda;

    this.getParams = () => {
        return {
            lambda: lambda
        }
    }

    // Probability distributioin
    const f = function(n) {
        if (n === 0) {
            return Math.exp(-lambda);
        }
        return f(n - 1)*lambda/n;
    }
    this.pdf = (...args) => homFn(f, ...args);

    // Sampling
    const draw = () => {
        const q = Math.random();

        let sum = 0; 
        let n = 0;
        while (true) {
            sum += f(n);
            if (sum > q) {
                return n;
            }
            n++;
        }
    }
    this.samples = N => [ ...new Array(N) ].map(() => draw());
}