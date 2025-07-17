"use client";

import latexToImage from "@/app/utils/latexToImage.mjs";
import { useEffect, useState } from "react";
/*import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Plot, Heading, LineSeries, Axis, Legend } from 'react-plot';
import { hydrate } from "@tanstack/react-query";
*/


function ParameterInputs({ params }) {
    const setParam = e => {
        
    }

    return (
        <div className={"w-full flex flex-row justify-center gap-5"}>
            {
                Object.entries(params).map(([ name, obj ], index) => (
                    <label className={"flex flex-row items-center gap-2"} key={index}>
                        {
                            latexToImage(`${obj.label}:`)
                        }
                        <input type="text" value={obj.value} name={name} onChange={setParam} className={"w-[100px] border-1 border-white text-right p-1"} />
                    </label>
                ))
            }
        </div>
    )
}

export default function Page() {
    const [ dist, setDist ] = useState("");
    const [ params, setParams ] = useState({});
    const [ count, setCount ] = useState(100);
    
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ samples, setSamples ] = useState({});

    useEffect(() => {
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
                    value: "10"
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
        } else if (dist === "cauchy") {
            setParams({
                x0: {
                    label: "x_0",
                    value: 0
                },
                gamma: {
                    label: "\\gammma",
                    value: 1
                }
            })
        } else {
            setParams({});
        }
        setCount(100);
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
        setSamples({});
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
        setSamples({ a: "a" })

        setIsLoading(false);
    }

    const clear = e => {
        e.preventDefault();

        if (isLoading) {
            return false;
        }

        setDist("");
        setSamples({});
        setError(false);
        setCount(100);
    }

    const results = () => {
        if (isLoading) {
            return <p>Loading...</p>
        }
        if (error) {
            return <p>An error occurred.</p>
        }
        if (Object.entries(samples).length) {
            return <p>Yeahhh</p>
        }
        return <></>;
    }

    return (
        <>
            <h2 className={"text-center text-lg font-bold"}>Statistical sampling tool</h2>
            <p>In the below, you may choose a probability distribution, enter values of your choosing for the relevant parameters, and how many samples you wish to draw. Then the API is called using the parameter values you have entered, and a set of values drawn according to the chosen probability distribution is returned. The resulting histogram, and the graph of the probability distribution for comparison, will appear underneath.</p>
            
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
                            <option value={"cauchy"} className={"color-[#e8ee8e8] bg-black"}>Cauchy distribution</option>
                        </select>
                    </label>
                    <div className={"w-full flex flex-row justify-center gap-5"}>
                        <ParameterInputs params={params} setter={setParams} />
                    </div>
                    {
                        dist ? <div className={"flex flex-col gap-5 items-center"}>
                            <label className={"w-full flex flex-row justify-center items-center gap-1"}>
                                <span>Number of samples:</span>
                                <input type="text" value={count} onChange={e => setCount(isNaN(e.target.value) ? count : Number(e.target.value))} className={"w-[100px] border-1 border-white text-right p-1"} />
                            </label>
                            {
                                isLoading ? <></> : 
                                    <div className={"flex flex-row gap-5"}>
                                        <input type="submit" className={"border-1 border-white p-1"} value="Sample" />
                                        <button className={"border-1 border-white p-1"} onClick={clear}>Clear form</button>
                                    </div>
                            }
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