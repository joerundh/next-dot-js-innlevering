export default [
    {   // Continuous uniform distribution
        name: "Continuous uniform distribution",
        description: [
            {
                pieces: [
                   "A stochastic variable ",
                   {
                        type: "latex",
                        from: [ "X" ]
                   },
                   "follows a continuous uniform fistribution if it is continuous (i.e. it can take any value between two values ",
                   {
                        type: "latex",
                        from: [ "a" ]
                   },
                   " and ",
                   {
                        type: "latex",
                        from: [ "b" ]
                   },
                   "), and if the probability that is takes a value inside any subinterval ",
                   {
                        type: "latex",
                        from: [ "(c, d) \\in (a, b)" ]
                   },
                   " equals ",
                   {
                        type: "latex",
                        from: [ "\\frac{d - c}{b - a}" ]
                   },
                   ". Thus the probability fistribution function is \"just a number\", namely ",
                   {
                        type: "latex",
                        from: [ "f(x) = \\frac{1}{b - a}" ]
                   },
                   " everywhere (for all ",
                   {
                        type: "latex",
                        from: [ "x \\in (a, b)" ]
                   },
                   ")."
                ]
            }
        ],
        info: [
            {
                key: "Notation",
                value: {
                    type: "latex",
                    from: "X \\sim \\mathrm{U}(a, b)"
                }
            },
            {
                key: "Parameters",
                value: {
                    type: "latex",
                    from: "a, b \\in \\mathbb{R}, \\quad a < b"
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
        ref: "continuous"
    },
    {   // Discrete uniform distribution
        name: "Discrete uniform distribution",
        description: [
            {
                
            }
        ],
        info: [
            {
                key: "Notation",
                value: {
                    type: "latex",
                    from: "N \\sim \\mathrm{U}\\{a, b\\}"
                }
            },
            {
                key: "Parameters",
                value: {
                    type: "latex",
                    from: "a, b \\in \\mathbb{Z}, \\quad a \\le b"
                }
            },
            {
                key: "Variables",
                value: {
                    type: "latex",
                    from: "N"
                }
            },
            {
                key: "Support",
                value: {
                    type: "latex",
                    from: "\\{ a, ..., b \\}"
                }
            },
            {
                key: "PDF",
                value: {
                    type: "latex",
                    from: "P(N = n) = \\frac{1}{b - a + 1}, \\quad a \\le n \\le b"
                }
            },
            {
                key: "CDF",
                value: {
                    type: "latex",
                    from: "P(N \\le n) = \\frac{n - a + 1}{b - a + 1}"
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
                    from: "\\frac{1}{12} \\big( (b - a + 1)^2 - 1 \\big)"
                }
            },
        ],
        ref: "discrete"
    },
    {   // Geometric distribution
        name: "Geometric distribution",
        description: [
            {
                pieces: [
                    "A geometric distribution describes an experiment being repeated several times, with the same probability ",
                    {
                        type: "latex",
                        from: [ "p" ]
                    },
                    " for success each time. The stochastic variable being the number ",
                    {
                        type: "latex",
                        from: [ "N" ]
                    },
                    " of trials before, and including, the first success, the probability distribution function gives the probability for each possible value ",
                    {
                        type: "latex",
                        from: [ "1, 2, 3, \\dots" ]
                    },
                    "."
                ]
            }
        ],
        info: [
            {
                key: "Notation",
                value: {
                    type: "latex",
                    from: [ "N \\sim \\mathrm{G}(p)" ]
                }
            },
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
    {   // Binomial distribution
        name: "Binomial distribution",
        description: [
            {
                pieces: [
                    "The binomial distribution describes an experiment being repeated a number ",
                    {
                        type: "latex",
                        from: [ "n" ]
                    },
                    " times, and then gives the probability that a number ",
                    {
                        type: "latex",
                        from: [ "K" ]
                    },
                    " of those experiments results in a success."
                ]
            }
        ],
        info: [
            {
                key: "Notation",
                value: {
                    type: "latex",
                    from: [ "K \\sim \\mathrm{B}(n, p)" ]
                }
            },
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
                    from: [ "(1 - p (1 - t))^n" ]
                }
            }
        ],
        ref: "binomial"
    },
    {   // Poisson distribution
        name: "Poisson distribution",
        description: [
            {
                pieces: [
                    ""
                ]
            }
        ],
        info: [
            {
                key: "Notation",
                value: {
                    type: "latex",
                    from: [ "N \\sim \\mathrm{Pois}(\\lambda)" ]
                }
            },
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
    {   // Exponential distribution
        name: "Exponential distribution",
        description: [
            {
                pieces: [
                    ""
                ]
            }
        ],
        info: [
            {
                key: "Notation",
                value: {
                    type: "latex",
                    from: [ "X \\sim \\mathrm{Exp}(\\lambda)" ]
                }
            },
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
    {   // Normal distribution
        name: "Normal distribution",
        description: [
            {
                pieces: [
                    ""
                ]
            }
        ],
        info: [
            {
                key: "Notation",
                value: {
                    type: "latex",
                    from: [ "X \\sim \\mathrm{N}(\\mu, \\sigma^2)" ]
                }
            },
            {
                key: "Parameters",
                value: {
                    type: "latex",
                    from: [ "\\mu \\in \\mathbb{R}", "\\sigma^2 \\in \\mathbb{R}_{> 0}" ]
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