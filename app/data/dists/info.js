export default distInfo = [
    {
        parameters: [ "a", "b" ],
        pdf: "\\left\\{ \\begin{array} \\end{array} \\right.",
        mean: "\\frac{a + b}{2}",
        variance: "\\frac{1}{12} (b - a)^2",
        ref: "uniform"
    },
    {
        ref: "quadratic",

    },
    {
        ref: "bernoulli",
        pdf: "(1 - p)^{n - 1} p",
        cdf: "1 - (1 - p)^n",
        mean: "\\frac{1}{p}"
    },
    {
        ref: "geometric"
    },
    {
        ref: "binomial"
    },
    {
        ref: "poisson"
    },
    {
        ref: "exponential"
    },
    {
        ref: "cauchy"
    },
    {
        ref: "gaussian"
    }
]