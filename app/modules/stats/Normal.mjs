export default function Normal(mu, sigma) {
    this.getParams = () => {
        return {
            mu: mu,
            sigma: sigma
        }
    }

    this.mean = mu;
    this.variance = sigma*sigma;

    const draw = () => mu + Math.sqrt(-2*Math.log(1 - Math.random()))*sigma*Math.cos(2*Math.PI*Math.random());

    this.samples = N => [ ...new Array(N) ].map(() => draw());
}