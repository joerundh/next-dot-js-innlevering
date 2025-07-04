export default function Geometric(p) {
    this.getParams = () => {
        return {
            p: p
        };
    };

    this.mean = 1/p;
    this.variance = (1 - p)/(p*p);

    const draw = () => Math.ceil(Math.log(1 - Math.random())/Math.log(1 - p));

    this.samples = (N) => [ ...new Array(N) ].map(() => draw());
}