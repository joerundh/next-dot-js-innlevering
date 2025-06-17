export default function ContinuousUniform(a, b) {
    this.getParams = () => {
        return {
            a: a,
            b: b
        };
    };
    const L = b - a;

    this.mean = (a + b)/2;
    this.variance = L*L/12;

    // Sampling

    const draw = () => a + L*Math.random();

    this.samples = N => (typeof N === "number" && Math.floor(N) === N && N > 0) ?
                            [ ...new Array(N) ].map(() => draw())
                        :
                            [];
}