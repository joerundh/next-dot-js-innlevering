export default function Exponential(lambda) {
    this.getParams = () => {
        return {
            lambda: lambda
        }
    }

    this.mean = 1/lambda;
    this.variance = 1/(lambda*lambda);

    this.samples = N => [ ...new Array(N) ].map(() => -Math.log(1 - Math.random())/lambda);
}