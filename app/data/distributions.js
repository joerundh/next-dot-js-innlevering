export default [
    {
        name: "Continuous uniform distribution",
        description: [
            [
                "A continuous uniform distribution describes experiments where a stochastic variable can take any value within a finite (either open or closed) interval that lies between a minimum value ",
                {
                    type: "latex",
                    from: [ "a" ]
                },
                " and a maximum value ",
                {
                    type: "latex",
                    from: [ "b" ]
                },
                ". The probability that the experiment yields a value in any subinterval of the main interval, equals the ratio of the length of that subinterval to the length of the main interval. Consequently, all subintervals of equal length have the same probability of the value occurring in them."
            ],
            [
                "The probability distribution function of a uniform distribution is a constant, equal to ",
                {
                    type: "latex",
                    from: [ "\\tfrac{1}{L}" ]
                },
                ", where",
                {
                    type: "latex",
                    from: [ "L = b - a" ]
                },
                "is the length of the main interval. The PDF is trivially symmetric about the midpoint ",
                {
                    type: "latex",
                    from: [ "\\tfrac{a + b}{2}" ]
                },
                ", which then also is the mean of the distribution."
            ]
        ],
        info: [
            {
                key: "Parameters",
                value: {
                    type: "latex",
                    from: [ "a, b \\in \\mathbb{R}, \\quad a < b" ]
                }
            },
            {
                key: "Variables",
                value: {
                    type: "latex",
                    from: "X"
                }
            },
            {
                key: "Support",
                value: {
                    type: "latex",
                    from: "[a, b]"
                }
            },
            {
                key: "PDF",
                value: {
                    type: "latex",
                    from: "f(x) = \\frac{1}{b - a}, \\quad a \\le x \\le b"
                }
            },
            {
                key: "CDF",
                value: {
                    type: "latex",
                    from: "F(x) = P(X \\le x) = \\frac{x - a}{b - a}"
                }
            },
            {
                key: "Mean",
                value: {
                    type: "latex",
                    from: "\\frac{a + b}{2}"
                }
            },
            {
                key: "Variance",
                value: {
                    type: "latex",
                    from: "\\frac{1}{12} (b - a)^2"
                }
            },
        ],
        ref: "uniform"
    },
    {
        name: "Geometric distribution",
        description: [
            [
                "dude",
                {
                    type: "latex",
                    from: [ "x^2" ]
                }
            ]
        ],
        info: [
            {
                key: "Parameters",
                value: {
                    type: "latex",
                    from: [ "p \\in [0, 1]" ]
                }
            },
            {
                key: "Variables",
                value: {
                    type: "latex",
                    from: [ "N" ]
                }
            },
            {
                key: "Support",
                value: {
                    type: "latex",
                    from: [ "\\mathbb{N} = \\{ 1, 2, 3, \\dots \\}" ]
                }
            },
            {
                key: "PDF",
                value: {
                    type: "latex",
                    from: [ "f(n) = P(N = n) = (1 - p)^{n - 1} p" ]
                }
            },
            {
                key: "CDF",
                value: {
                    type: "latex",
                    from: [ "F(n) = P(N \\le n) = 1 - (1 - p)^n" ]
                }
            },
            {
                key: "Mean",
                value: {
                    type: "latex",
                    from: [ "\\frac{1}{p}" ]
                }
            },
            {
                key: "Variance",
                value: {
                    type: "latex",
                    from: [ "\\frac{1 - p}{p^2}" ]
                }
            },
            {
                key: "Generating function",
                value: {
                    type: "latex",
                    from: [ "\\frac{tp}{1 - t (1 - p)}" ]
                }
            }
        ],
        ref: "geometric"
    },
    {
        name: "Binomial distribution",
        description: [
            [
                ""
            ]
        ],
        info: [
            {
                key: "Parameters:",
                value: {
                    type: "latex",
                    from: [ "n \\in \\mathbb{Z}_{\\ge 0} = \\{ 0, 1, 2, \\dots \\}, p \\in [0, 1]" ]
                },
            },
            {
                key: "Variables",
                value: {
                    type: "latex",
                    from: [ "K" ]
                }
            },
            {
                key: "Support",
                value: {
                    type: "latex",
                    from: [ "\\{ 0, 1, 2, \\dots, n \\}" ]
                }
            },
            {
                key: "PDF",
                value: {
                    type: "latex",
                    from: [ "f(k) = P(K = k) = \\binom{n}{k} p^k (1 - p)^{n - k}" ]
                }
            },
            {
                key: "CDF",
                value: {
                    type: "latex",
                    from: [ "F(k) = P(K \\le k) = \\sum\\limits_{r = 0}^k \\binom{n}{r} p^r (1 - p)^{n - r}" ]
                }
            },
            {
                key: "Mean",
                value: {
                    type: "latex",
                    from: [ "np" ]
                }
            },
            {
                key: "Variance",
                value: {
                    type: "latex",
                    from: [ "np (1 - p)" ]
                }
            },
            {
                key: "Generating function",
                value: {
                    type: "latex",
                    from: [ "(1 + p (t - 1))^n" ]
                }
            }
        ],
        ref: "binomial"
    },
    {
        name: "Poisson distribution",
        description: [
            [
                ""
            ]
        ],
        info: [
            {
                key: "Parameters",
                value: {
                    type: "latex",
                    from: [ "\\lambda \\in \\mathbb{R}_{> 0} = (0, \\infty)" ]
                }
            },
            {
                key: "Variables",
                value: {
                    type: "latex",
                    from: [ "N" ]
                }
            },
            {
                key: "Support",
                value: {
                    type: "latex", 
                    from: [ "\\mathbb{Z}_{\\ge 0} = \\{ 0, 1, 2, \\dots \\}" ]
                }
            },
            {
                key: "PDF",
                value: {
                    type: "latex",
                    from: [ "f(n) = P(N = n) = e^{-\\lambda} \\frac{\\lambda^n}{n!}" ]
                }
            },
            {
                key: "CDF",
                value: {
                    type: "latex",
                    from: [ "F(n) = P(N \\le n) = e^{-\\lambda} \\sum\\limits_{k = 0}^n \\frac{\\lambda^k}{k!} = \\frac{1}{n!} \\int\\limits_\\lambda^\\infty e^{-u} u^n \\: dx" ]
                }
            },
            {
                key: "Mean",
                value: {
                    type: "latex",
                    from: [ "\\lambda" ]
                }
            },
            {
                key: "Variance",
                value: {
                    type: "latex",
                    from: [ "\\lambda" ]
                }
            },
            {
                key: "Generating function",
                value: {
                    type: "latex",
                    from: [ "e^{\\lambda (t - 1)}" ]
                }
            }
        ],
        ref: "poisson"
    },
    {
        name: "Exponential distribution",
        description: [
            [
                ""
            ]
        ],
        info: [
            {
                key: "Parameters",
                value: {
                    type: "latex",
                    from: [ "\\lambda \\in \\mathbb{R}_{> 0} = (0, \\infty)" ]
                }
            },
            {
                key: "Variables",
                value: {
                    type: "latex",
                    from: [ "X" ]
                }
            },
            {
                key: "Support",
                value: {
                    type: "latex",
                    from: [ "\\mathbb{R}_{\\ge 0} = [0, \\infty)" ]
                }
            },
            {
                key: "PDF",
                value: {
                    type: "latex",
                    from: [ "f(x) = \\lambda e^{-\\lambda x}" ]
                }
            },
            {
                key: "CDF",
                value: {
                    type: "latex",
                    from: [ "F(x) = P(X \\le x) = 1 - e^{-\\lambda x}" ]
                }
            },
            {
                key: "Mean",
                value: {
                    type: "latex",
                    from: [ "\\frac{1}{\\lambda}" ]
                }
            },
            {
                key: "Variance",
                value: {
                    type: "latex",
                    from: [ "\\frac{1}{\\lambda^2}" ]
                }
            }
        ],
        ref: "exponential"
    },
    {
        name: "Cauchy distribution",
        description: [
            [
                ""
            ]
        ],
        info: [
            {
                key: "Parameters",
                value: {
                    type: "latex",
                    from: [ "x_0 \\in \\mathbb{R}", "\\gamma \\in \\mathbb{R}_{> 0}" ]
                }
            },
            {
                key: "Variables",
                value: {
                    type: "latex",
                    from: [ "X" ]
                }
            },
            {
                key: "Support",
                value: {
                    type: "latex",
                    from: [ "\\mathbb{R}" ]
                }
            },
            {
                key: "PDF",
                value: {
                    type: "latex",
                    from: [ "f(x) = \\frac{1}{\\pi} \\frac{\\gamma}{(x - x_0)^2 + \\gamma^2}" ]
                }
            },
            {
                key: "CDF",
                value: {
                    type: "latex",
                    from: [ "F(x) = P(X \\le x) = \\frac{1}{\\pi} \\mathrm{arctan}\\bigg( \\frac{x - x_0}{\\gamma} \\bigg) + \\frac{1}{2}" ]
                }
            },
            {
                key: "Mean",
                value: {
                    type: "latex",
                    from: [ "\\mathrm{undefined}" ]
                }
            },
            {
                key: "Variance",
                value: {
                    type: "latex",
                    from: [ "\\mathrm{undefined}" ]
                }
            }
        ],
        ref: "cauchy"
    },
    {
        name: "Normal distribution",
        description: [
            [
                ""
            ]
        ],
        info: [
            {
                key: "Parameters",
                value: {
                    type: "latex",
                    from: [ "\\mu \\in \\mathbb{R}", "\\sigma \\in \\mathbb{R}_{> 0}" ]
                }
            },
            {
                key: "Variables",
                value: {
                    type: "latex",
                    from: [ "X" ]
                }
            },
            {
                key: "Support",
                value: {
                    type: "latex",
                    from: [ "\\mathbb{R}" ]
                }
            },
            {
                key: "PDF",
                value: {
                    type: "latex",
                    from: [ "f(x) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}} e^{-(x - \\mu)^2/2\\sigma^2}" ]
                }
            },
            {
                key: "CDF",
                value: {
                    type: "latex",
                    from: [ "F(x) = P(X \\le x) = \\frac{1}{2} \\Bigg( 1 + \\mathrm{erf}\\bigg( \\frac{x - \\mu}{\\sigma\\sqrt{2}} \\bigg) \\Bigg)" ]
                }
            },
            {
                key: "Mean",
                value: {
                    type: "latex",
                    from: [ "\\mu" ]
                }
            },
            {
                key: "Variance",
                value: {
                    type: "latex",
                    from: [ "\\sigma^2" ]
                }
            }
        ],
        ref: "normal"
    }
];