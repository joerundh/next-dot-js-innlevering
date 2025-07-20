import homFn from "@/app/utils/homFn.mjs";

export default function Continuous(a, b) {
    const L = b - a;
    this.mean = (a + b)/2;
    this.variance = L*L/12;

    this.getParams = () => {
        return {
            a: a,
            b: b
        };
    };

    // Probability distribution
    this.pdf = (...args) => homFn(() => 1/(b - a), ...args);

    // Sampling
    const draw = () => a + L*Math.random();
    this.samples = N => (typeof N === "number" && Math.floor(N) === N && N > 0) ?
                            [ ...new Array(N) ].map(() => draw())
                        :
                            [];
}