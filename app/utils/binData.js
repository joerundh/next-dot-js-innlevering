function IQR(data) {
    const sorted = data.toSorted((a, b) => a - b);

    const q1Pos = 0.25*(data.length - 1);
    const q3Pos = 0.75*(data.length - 1);

    const interpolate = pos => {
        const base = Math.floor(pos);
        const rest = pos - base;
        return base < sorted.length - 2 ? base + rest*(sorted[base + 1] - sorted[base]) : sorted[base];
    }

    return interpolate(q3Pos) - interpolate(q1Pos);
}

export default function binData(data) {
    const N = data.length;
    const [ min, max ] = [ Math.min(...data), Math.max(...data) ];

    // Number of bins
    const h = 2*IQR(data)/Math.pow(N, 1/3);
    const k = 20 // Math.ceil((max - min)/h);

    // Bins
    const w = (max - min)/k;
    const binCenters = [ ...new Array(k) ].map((x, index) => (index + 0.5)*w);

    // Count
    const binCounts = new Array(k).fill(0);
    data.forEach(x => {
        if (x === max) {
            binCounts[k - 1]++;
        } else {
            const i = Math.floor((x - min)/w);
            binCounts[i]++;
        }
    });

    return { binCenters, binCounts };
}