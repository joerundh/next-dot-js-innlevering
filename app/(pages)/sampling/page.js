"use client";

import Continuous from "@/app/modules/stats/Continuous";
import Discrete from "@/app/modules/stats/Discrete";
import Geometric from "@/app/modules/stats/Geometric";
import Binomial from "@/app/modules/stats/Binomial";
import Poisson from "@/app/modules/stats/Poisson";
import Exponential from "@/app/modules/stats/Exponential";
import Normal from "@/app/modules/stats/Normal";

import binData from "@/app/utils/binData";
import { useEffect, useState } from "react";
import ParameterInput from "@/app/components/ui/ParameterInput";

const DataChart = dynamic(() => import("@/app/components/ui/DataChart"), { ssr: false })

export default function Page() {
    const [ dist, setDist ] = useState("");
    const [ params, setParams ] = useState({});
    const [ count, setCount ] = useState(1000);
    
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ data, setData ] = useState({});

    useEffect(() => {
        setError(false);
        setIsLoading(false);
        if (dist === "continuous") {
            setParams({
                a: {
                    label: "a",
                    value: 0
                },
                b: {
                    label: "b",
                    value: 1
                }
            })
        } else if (dist === "discrete") {
            setParams({
                a: {
                    label: "a",
                    value: 1
                },
                b: {
                    label: "b",
                    value: 10
                }
            })
        } else if (dist === "geometric") {
            setParams({
                p: {
                    label: "p",
                    value: 0.5
                }
            })
        } else if (dist === "binomial") {
            setParams({
                n: {
                    label: "n",
                    value: 10
                },
                p: {
                    label: "p",
                    value: 0.5
                }
            })
        } else if (dist === "poisson") {
            setParams({
                lambda: {
                    label: "\\lambda",
                    value: 1
                }
            })
        } else if (dist === "exponential") {
            setParams({
                lambda: {
                    label: "\\lambda",
                    value: 1
                }
            })
        } else if (dist === "normal") {
            setParams({
                mu: {
                    label: "\\mu",
                    value: 0
                },
                sigma: {
                    label: "\\sigma",
                    value: 1
                }
            })
        } else {
            setParams({});
        }
    }, [ dist ])

    const submit = async e => {
        e.preventDefault();

        // If samling is being performed, do nothing
        if (isLoading) {
            return;
        }

        // Set search parameters for API call
        const searchParams = new URLSearchParams();
        Object.entries(params).forEach(([ name, obj ]) => {
            searchParams.append(name, obj.value)
        })
        searchParams.append("count", count);

        // Reset switches and erase earlier fetched data
        setData({});
        setError(false);
        setIsLoading(true);

        // Call API
        const res = await fetch(`/api/sampling/${dist}?${searchParams.toString()}`);
        if (!res.ok) {
            setError(true)
            setIsLoading(false);
            return;
        }
        const obj = await res.json();
        setData(obj)

        setIsLoading(false);
    }

    const clear = e => {
        e.preventDefault();

        if (isLoading) {
            return;
        }

        setDist("");
        setData({});
        setError(false);
        setCount(100);
    }

    const results = () => {
        if (isLoading) {
            return <p className={"w-full text-center"}>Loading...</p>
        }
        if (error) {
            return <p>An error occurred.</p>
        }
        if (Object.entries(data).length) {
            const [ min, max ] = [ Math.min(...data.samples.data), Math.max(...data.samples.data) ];

            const bins = {};
            const pdf = {};

            if (data.dist.ref === "continuous") {
                const { binCenters, binCounts } = binData(data.samples.data);
                bins.centers = binCenters;
                bins.counts = binCounts;

                const { a, b } = data.params;
                pdf.X = [ ...new Array(500 + 1) ].map((x, index) => min + index*(max - min)/500);
                pdf.Y = new Continuous(a, b).pdf(...pdf.X);
            } else if (data.dist.ref === "discrete") {
                bins.centers = [ ...new Array(max - min + 1) ].map((x, index) => min + index);
                const binCounts = new Array(max - min + 1).fill(0);
                data.samples.data.forEach(i => binCounts[i - min]++);
                bins.counts = binCounts;
                
                const { a, b } = data.params;
                pdf.X = bins.centers;
                pdf.Y = new Discrete(a, b).pdf(...pdf.X);
            } else if (data.dist.ref === "geometric") {
                bins.centers = [ ...new Array(max - min + 1) ].map((x, index) => min + index);
                const binCounts = new Array(max - min + 1).fill(0);
                data.samples.data.forEach(i => binCounts[i - min]++);
                bins.counts = binCounts;
                
                const { p } = data.params;
                pdf.X = bins.centers;
                pdf.Y = new Geometric(p).pdf(...pdf.X);
            } else if (data.dist.ref === "binomial") {
                bins.centers = [ ...new Array(max - min + 1) ].map((x, index) => min + index);
                const binCounts = new Array(max - min + 1).fill(0);
                data.samples.data.forEach(i => binCounts[i - min]++);
                bins.counts = binCounts;
                
                const { n, p } = data.params;
                pdf.X = bins.centers;
                pdf.Y = new Binomial(n, p).pdf(...pdf.X)
            } else if (data.dist.ref === "poisson") {
                bins.centers = [ ...new Array(max - min + 1) ].map((x, index) => min + index);
                const binCounts = new Array(max - min + 1).fill(0);
                data.samples.data.forEach(i => binCounts[i - min]++);
                bins.counts = binCounts;
                
                const { lambda } = data.params;
                pdf.X = bins.centers;
                pdf.Y = new Poisson(lambda).pdf(...pdf.X)
            } else if (data.dist.ref === "exponential") {
                const { binCenters, binCounts } = binData(data.samples.data);
                bins.centers = binCenters;
                bins.counts = binCounts;

                const { lambda } = data.params;
                pdf.X = [ ...new Array(500 + 1) ].map((x, index) => min + index*(max - min)/500);
                pdf.Y = new Exponential(lambda).pdf(...pdf.X);
            } else if (data.dist.ref === "normal") {
                const { binCenters, binCounts } = binData(data.samples.data);
                bins.centers = binCenters;
                bins.counts = binCounts;

                const { mu, sigma } = data.params;
                pdf.X = [ ...new Array(500 + 1) ].map((x, index) => min + index*(max - min)/500);
                pdf.Y = new Normal(mu, sigma).pdf(...pdf.X);
            } else {
                return <></>
            }

            const plotData = {
                labels: bins.centers,
                innerWidth: 550,
                outerWidth: 550,
                datasets: [
                    {
                        type: "bar",
                        label: "Samples",
                        data: bins.counts.map(x => x/data.samples.count),
                        backgroundColor: "rgba(54, 162, 235, 0.5)",
                        borderColor: "rgba(54, 162, 235, 1)",
                        borderWidth: 1,
                        barPercentage: 1.0,
                        categoryPercentage: 1.0
                    },
                    {
                        type: "line",
                        label: "PDF",
                        data: pdf.X.map((x, index) => {
                            return {
                                x: x,
                                y: pdf.Y[index]
                            };
                        }),
                        borderColor: "white",
                        borderWidth: 2,
                        fill: false,
                        pointRadius: 0,
                        parsing: false
                    }
                ]
            }
            
            const options = {
                responsive: true,
                plugins: {
                    legend: {
                        position: "right",
                        align: "center"
                    }
                },
                scales: {
                    x: {
                        type: "linear",
                        position: "bottom"
                    }
                },
                devicePizelRatio: 2,
                maintainAspectRatio: false
            }

            return <div className={"mt-5 w-full h-[300px]"}>
                <DataChart data={plotData} options={options} />
            </div>;
        }
        return <></>;
    }

    return (
        <>
            <h2 className={"text-center text-lg font-bold"}>Statistical sampling tool</h2>
            <p>In the below, you may choose a probability distribution, enter values of your choosing for the relevant parameters, and how many samples you wish to draw. There are eight distributions available, some continuous and some discrete. Then the API is called using the parameter values you have entered, and a set of values drawn according to the chosen probability distribution is returned. The resulting histogram, and the graph of the probability distribution for comparison, will appear underneath.</p>
            <p>Note: the correspondence gets better with increased sample size. Then again, more data means more handling time. So decide how exact a match you want, and how long you&apos;re willing to wait for it, and find your own balance.</p>
            
            <form onSubmit={submit}>
                <div className={"w-full flex flex-col gap-4 justify-center items-center"}>
                    <label className={"flex flex-row items-center gap-2"}>
                        <span className={"w-[150px] text-right"}>Choose a distribution:</span>
                        <select value={dist} onChange={e => setDist(e.target.value)} className={"border-1 border-[#e8e8e8] p-1 color-[#e8e8e8] rounded-sm"}>
                            {
                                dist ? <></> : <option value={""} className={"color-[#e8ee8e8] bg-black"}>-</option>
                            }
                            <option value={"continuous"} className={"color-[#e8ee8e8] bg-black"}>Continuous uniform distribution</option>
                            <option value={"discrete"} className={"color-[#e8ee8e8] bg-black"}>Discrete uniform distribution</option>
                            <option value={"geometric"} className={"color-[#e8ee8e8] bg-black"}>Geometric distribution</option>
                            <option value={"binomial"} className={"color-[#e8ee8e8] bg-black"}>Binomial distribution</option>
                            <option value={"poisson"} className={"color-[#e8ee8e8] bg-black"}>Poisson distribution</option>
                            <option value={"exponential"} className={"color-[#e8ee8e8] bg-black"}>Exponential distribution</option>
                            <option value={"normal"} className={"color-[#e8ee8e8} bg-black"}>Normal distribution</option>
                        </select>
                    </label>
                    <div className={"w-full flex flex-row justify-center gap-5"}>
                        <ParameterInput params={params} setter={setParams} />
                    </div>
                    {
                        dist ? <div className={"flex flex-col gap-5 items-center"}>
                            <label className={"w-full flex flex-ro-w justify-center items-center gap-1"}>
                                <span>Number of samples:</span>
                                <input type="text" value={count} onChange={e => setCount(isNaN(e.target.value) ? count : Number(e.target.value))} className={"w-[100px] border-1 border-white text-right p-[1px]"} />
                            </label>
                            <div className={"flex flex-row gap-5"}>
                                <input type="submit" className={"w-[200px] border-1 border-white p-[1px]"} value="Sample" />
                                <button className={"w-[200px] border-1 border-white p-[1px]"} onClick={clear}>Clear form</button>
                            </div>
                        </div> : <></>
                    }
                    {
                        results()
                    }
                </div>
            </form>
        </>
    )
}