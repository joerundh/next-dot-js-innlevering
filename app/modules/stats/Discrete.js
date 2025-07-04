export default function Discrete(a, b) {
    this.getParams = () => {
        return {
            a: a,
            b: b
        }
    }
    const n = b - a + 1;

    this.mean = (a + b)/2;
    this.variance = (n*n - 1)/12;

    const draw = () => a + Math.floor(n*Math.random());

    this.samples = N => [ ...new Array(N) ].map(() => draw());
}