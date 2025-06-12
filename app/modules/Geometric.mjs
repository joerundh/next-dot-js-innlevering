export default function Geometric(...args) {
    let p;
    if (args.length === 0) {
        p = 0;
    } else if (args.length >= 1) {
        if (typeof args[0] === "number") {
            if (args[0] >= 0) {
                if (args[0] <= 1) {
                    p = args[0];
                } else {
                    p = 1;
                }
            } else {
                p = 0;
            }
        } else {
            p = 0;
        }
    }

    const f = p === 0 ?
                    () => 0
                : (
                    p === 1 ? 
                        (n) => n === 1 ? 1 : 0
                    :
                        (n) => (n > 0 && Math.floor(n) === n) ? Math.pow(1 - p, n) : 0
                );
    
    this.pdf = (...args) => homFn(f, ...args);

    const F = p === 0 ? 
                    () => 0
                : (
                    p === 1 ? 
                        () => 1
                    :
                        (n) => (n > 0 && Math.floor(n) === n) ? 1 - Math.pow(1 - p, n) : 0
                )

    this.cdf = (...args) => homFn(F, ...args);

    const sample = () => Math.ceil(-Math.log(1 - Math.random())/Math.log(1 - p));

    this.draw = (N) => [ ...new Array(N) ].map(x => sample());
}