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
                pieces: [
                    "Assume that a stochastic variable ",
                    {
                        type: "latex",
                        from: [ "A" ]
                    },
                    " can take any one out of a discrete set of values. If the probability that ",
                    {
                        type: "latex",
                        from: [ "A" ]
                    },
                    " takes any value is the same for all values, then ",
                    {
                        type: "latex",
                        from: [ "A" ]
                    },
                    " is said to follow a discrete uniform distribution. A classic example would be that of shaking a bag of marbles, each with a distinct colour, and then picking out one of them from the bag. Then the probability of picking any one colour is the same for all the colours, equal to ",
                    {
                        type: "latex",
                        from: [ "\\frac{1}{N}" ]
                    },
                    ", where ",
                    {
                        type: "latex",
                        from: [ "N" ]
                    },
                    " is the number of distinct colours to pick from."
                ]
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
                    "Consider an experiment which can be performed over and over again, and which has a probability ",
                    {
                        type: "latex",
                        from: [ "p" ]
                    },
                    " of success at any attempt, regardless of how many experiments has been performed before and what their outcomes were. The, if one defined the number of experiments ",
                    {
                        type: "latex",
                        from: [ "N" ]
                    },
                    " that must be performed to in the end have a successful attempt, ",
                    {
                        type: "latex",
                        from: [ "N" ]
                    },
                    " follows a geometric distribution."
                ]
            },
            {
                pieces: [
                    "Since all trials are independent of each other, and the probability of failure is ",
                    {
                        type: "latex",
                        from: [ "1 - p" ]
                    },
                    ", the probability that ",
                    {
                        type: "latex",
                        from: [ "N = n" ]
                    },
                    " experiments must be performed to end on a success, is ",
                    {
                        type: "latex",
                        from: [ "P(N = n) = (1 - p)^{n - 1} p" ]
                    },
                    " (for ",
                    {
                        type: "latex",
                        from: [ "n = 1, 2, 3, \\dots" ]
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
                    "Assume that we have an experiment which can be performed with a success rate ",
                    {
                        type: "latex",
                        from: [ "p" ]
                    },
                    ", when all experiments are performed independently of each other. Assume the experiements is performed ",
                    {
                        type: "latex",
                        from: [ "n" ]
                    },
                    " times. Define then the stochastic variable ",
                    {
                        type: "latex",
                        from: [ "K" ]
                    },
                    " which represents how many of the ",
                    {
                        type: "latex",
                        from: [ "n" ]
                    },
                    " experiments are successful. This variable then follows a binomial distribution."
                ]
            },
            {
                pieces: [
                    "The probability ",
                    {
                        type: "from",
                        from: [ "P(K = k)" ]
                    },
                    " that ",
                    {
                        type: "latex",
                        from: [ "k" ]
                    },
                    " experiments are successful, independently is their order (!), equals ",
                    {
                        type: "latex",
                        from: [ "\\binom{n}{k} p^k (1 - p)^{n - k}" ]
                    },
                    ", which accounts for ",
                    {
                        type: "latex",
                        from: [ "k" ]
                    },
                    " successes, ",
                    {
                        type: "latex",
                        from: [ "n - k" ]
                    },
                    " failures, and where ",
                    {
                        type: "latex",
                        from: [ "\\binom{n}{k}" ]
                    },
                    " are binomial coefficients, which count the number of distinct ways in which the successes and failures can be ordered."
                ]
            },
            {
                pieces: [
                    "As an example, for two experiements (",
                    {
                        type: "latex",
                        from: [ "n = 2" ]
                    },
                    "), there is one way to order two successes and two failures, thus ",
                    {
                        type: "latex",
                        from: [ "\\binom{2}{0} = \\binom{2}{2} = 1" ]
                    },
                    "while for one success and one failure, there are two ways two order them, thus ",
                    {
                        type: "latex",
                        from: [ "\\binom{2}{1} = 2" ]
                    },
                    ". As such, one has ",
                    {
                        type: "latex",
                        from: [ "P(K = 0) = (1 - p)^2", "P(K = 2) = p^2" ]
                    }, 
                    " and ",
                    {
                        type: "latex",
                        from: [ "P(K = 1) = 2p(1 - p)" ]
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
                    "Assume that we count the number of times that a random event occurs over some time interval. Denote this count by ",
                    {
                        type: "latex",
                        from: [ "N" ]
                    },
                    ", and say that we know the average number ",
                    {
                        type: "latex",
                        from: [ "\\lambda" ]
                    },
                    " of times that the event occurs. Then ",
                    {
                        type: "latex",
                        from: [ "N" ]
                    },
                    " is a stochastic variable following a Poisson distribution, with probability distribution function ",
                    {
                        type: "latex",
                        from: [ "P(N = n) = \\frac{\\lambda^n}{n!} e^{-\\lambda}" ]
                    },
                    " that the event occurs ",
                    {
                        type: "latex",
                        from: [ "n" ]
                    },
                    " times, where ",
                    {
                        type: "latex",
                        from: [ "n!" ]
                    },
                    " denotes the factorial function ",
                    {
                        type: "latex",
                        from: [ "1 \\cdot 2 \\cdots (n - 1) \\cdot n" ]
                    },
                    ", and ",
                    {
                        type: "latex",
                        from: [ "e^{-\\lambda}" ]
                    },
                    " is the exponential function."
                ]
            },
            {
                pieces: [
                    "The same distribution describes anything that is counted over some interval, area, volume. For example the number of visible stars in a given section of the night sky, the number of quartz grains in a scoop of beach sand, the number of sodium atoms in a glass of sea water, and so on. The difference between these cases lies the parameter ",
                    {
                        type: "latex",
                        from: [ "\\lambda" ]
                    },
                    ", which equals both the mean of the distribution and the variance. On the last note, the standard deviation thus equals the square root of ",
                    {
                        type: "latex",
                        from: [ "\\lambda" ]
                    },
                    ". From this, if the the expected number ",
                    {
                        type: "latex",
                        from: [ "\\langle N \\rangle = \\lambda" ]
                    },
                    " (the mean) has a value to some order ",
                    {
                        type: "latex",
                        from: [ "10^{M}" ]
                    },
                    ", the standard deviation is of the order ",
                    {
                        type: "latex",
                        from: [ "10^{M/2}" ]
                    },
                    ", which for higher values of ",
                    {
                        type: "latex",
                        from: [ "M" ]
                    },
                    " becomes smaller and smaller compared to the mean. Thus, for the examples of sodium atoms or quartz grains, all samples (scoops, glasses) can not at all be expected to vary much in number compared to the numbers themselves. Hence the apparent homogeneity of beach sand, seawater, et.al.."
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
                    "Assume that an event occurs at irregular, random intervals. Then the time ",
                    {
                        type: "latex",
                        from: [ "T" ]
                    },
                    " between two consecutive events follows an exponential distribution. Assuming that the event happens at a frequency ",
                    {
                        type: "latex",
                        from: [ "\\lambda" ]
                    },
                    ", the probability that a second event occurs at the latest a time ",
                    {
                        type: "latex",
                        from: [ "t" ]
                    },
                    " after a first one has occurred, is ",
                    {
                        type: "latex",
                        from: [ "P(T \\le t) = 1 - e^{-\\lambda t}" ]
                    },
                    ", which approaches 1 with increasing ",
                    {
                        type: "latex",
                        from: [ "t" ]
                    },
                    ". The smaller the value of the frequency ",
                    {
                        type: "latex",
                        from: [ "\\lambda" ]
                    },
                    ", the slower it approaches one, i.e. the longer time may pass between consecutive events."
                ]
            },
            {
                pieces: [
                    "The typical example cited is that of radioactive decay. When an atomic nucleus in a piece of radioactive matter decays, a particle is emitted which can then be registered by, for example, a Geiger counter. The frequency with which this occurs depends on the type of nuclues, that is, what element it is, as well as what isotope. Since this frequency of events characterizes the element, one may thus talk about the expected time it takes for, say, half of the nuclei in a piece of a given element to have decayed. Hence the term 'half-life'."
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
                    "One of the most well-studied and employed distributions, the normal distribution is important, among other things, for its applicability, in part due to the central limit theorem, in describing a wide variety of phenomena, as well as for its relatively straight-forward mathematical form and properties."
                ]
            },
            {
                pieces: [
                    "It is characterized by two parameters ",
                    {
                        type: "latex",
                        from: [ "\\mu" ]
                    },
                    " and ",
                    {
                        type: "latex",
                        from: [ "\\sigma" ]
                    },
                    ", which are equal to the mean and the standard deviation, respectively. In addition, given these values, the normal distribution can be shown to be the continuous distribution which maximizes the differential entropy. Thus in cases when little more information is available than these values, the normal distribution is generally a fairly good candidate."
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