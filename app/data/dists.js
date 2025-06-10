export default distInfo = [
    {
        name: "Continuous uniform distribution",
        parameters: [ "a", "b" ],
        variables: [ "X" ],
        support: "[a, b]",
        pdf: "f(x) = \\frac{1}{b - a}, \\quad a \\le x \\le b",
        cdf: "F(x) = P(X \\le x) = \\frac{x - a}{b - a}",
        mean: "\\frac{a + b}{2}",
        variance: "\\frac{1}{12} (b - a)^2",
        ref: "cont-uniform"
    },
    {
        name: "Geometric distribution",
        parameters: [ "p" ],
        variables: [ "N" ],
        support: "\\mathbb{N} = \\{ 1, 2, 3, \\dots \\}",
        pdf: "f(n) = P(N = n) = (1 - p)^{n - 1} p",
        cdf: "F(n) = P(N \\le n) = 1 - (1 - p)^n",
        mean: "\\frac{1}{p}",
        variance: "\\frac{1 - p}{p^2}",
        generating_function: "\\frac{tp}{1 - t (1 - p)}",
        ref: "geometric"
    },
    {
        name: "Binomial distribution",
        parameters: [ "n", "p" ],
        variables: [ "K" ],
        support: "\\{ 0, 1, 2, \\dots, n \\}",
        pdf: "f(k) = P(K = k) = \\binom{n}{k} p^k (1 - p)^{n - k}",
        cdf: "F(k) = P(K \\le k) = \\sum\\limits_{r = 0}^k \\binom{n}{r} p^r (1 - p)^{n - r}",
        mean: "np",
        variance: "np (1 - p)",
        generating_function: "(1 + p (t - 1))^n",
        ref: "binomial"
    },
    {
        name: "Poisson distribution",
        parameters: [ "\\lambda" ],
        variables: [ "N" ],
        support: "\\mathbb{Z}_{\\ge 0} = \\{ 0, 1, 2, \\dots \\}",
        pdf: "f(n) = P(N = n) = e^{-\\lambda} \\frac{\\lambda^n}{n!}",
        cdf: "F(n) = P(N \\le n) = e^{-\\lambda} \\sum\\limits_{k = 0}^n \\frac{\\lambda^k}{k!} = \\frac{1}{n!} \\int\\limits_\\lambda^\\infty e^{-u} u^n \\: dx",
        mean: "\\lambda",
        variance: "\\lambda",
        generating_function: "e^{\\lambda (t - 1)}",
        ref: "poisson"
    },
    {
        name: "Exponential distribution",
        parameters: [ "\\lambda" ],
        variables: [ "X" ],
        support: "\\mathbb{R}^+ = [0, \\infty)",
        pdf: "f(x) = \\lambda e^{-\\lambda x}",
        cdf: "F(x) = P(X \\le x) = 1 - e^{-\\lambda x}",
        mean: "\\frac{1}{\\lambda}",
        variance: "\\frac{1}{\\lambda^2}",
        ref: "exponential"
    },
    {
        name: "Cauchy distribution",
        parameters: [ "x_0", "\\gamma" ],
        variables: [ "X" ],
        support: "\\mathbb{R}",
        pdf: "f(x) = \\frac{1}{\\pi} \\frac{\\gamma}{(x - x_0)^2 + \\gamma^2}",
        cdf: "F(x) = P(X \\le x) = \\frac{1}{\\pi} \\mathrm{arctan}\\bigg( \\frac{x - x_0}{\\gamma} \\bigg) + \\frac{1}{2}",
        mean: "\\mathrm{undefined}",
        variance: "\\mathrm{undefined}",
        ref: "cauchy"
    },
    {
        name: "Normal distribution",
        parameters: [ "\\mu", "\\sigma" ],
        variables: [ "X" ],
        support: "\\mathbb{R}",
        pdf: "f(x) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}} e^{-(x - \\mu)^2/2\\sigma^2}",
        cdf: "F(x) = P(X \\le x) = \\frac{1}{2} \\Bigg( 1 + \\mathrm{erf}\\bigg( \\frac{x - \\mu}{\\sigma\\sqrt{2}} \\bigg) \\Bigg)",
        mean: "\\mu",
        variance: "\\sigma^2",
        ref: "normal"
    }
]