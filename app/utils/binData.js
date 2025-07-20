function IQR(data) {
    const sorted = data.toSorted((a, b) => a - b);
    const n = sorted.length;

    const q1Pos = 0.25*n;
    const q3Pos = 0.75*n;

    const interpolate = pos => {
        const base = Math.floor(pos);
        const rest = pos - base;
        return base === n ? sorted[base] : sorted[base] + rest*(sorted[base + 1] - sorted[base]);
    }

    return interpolate(q3Pos) - interpolate(q1Pos);
}

export default function binData(data) {
    const N = data.length;
    const [ min, max ] = [ Math.min(...data), Math.max(...data) ];

    // Number of bins
    const h = 2*IQR(data)/Math.pow(N, 1/3);         // Ideal bin width
    const k = Math.ceil((max - min)/h);             // Approximate ideal number of bins

    // Bins
    const w = (max - min)/k;                                                            // Actual bin width
    const binCenters = [ ...new Array(k) ].map((x, index) => min + (index + 0.5)*w);    // Bin centers  

    // Count
    const binCounts = new Array(k).fill(0);
    data.forEach(x => {
        const i = Math.floor((x - min)/w);
        binCounts[i]++;
    });
    // Normalize
    binCounts.forEach((x, index) => { binCounts[index] = x/w; })

    return { binCenters, binCounts };
}