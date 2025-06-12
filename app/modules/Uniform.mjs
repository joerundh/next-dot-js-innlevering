import homFn from "../utils/homFn.mjs";

export default function Uniform(...args) {
    let a, b;
    if (args.length === 0) {
        [ a, b ] = [ 0, 1 ];
    } else if (args.length == 1) {
        if (typeof args[0] === "number") {
            if (args[0] === 0) {
                [ a, b ] = [ 0, 1 ];
            } else {
                [ a, b ] = [ Math.min(args[0], 0), Math.max(args[0], 0) ];
            }
        } else {
            [ a, b ] = [ 0, 1 ];
        }
    } else {
        if (typeof args[0] === "number") {
            if (typeof args[1] === "number") {
                [ a, b ] = [ Math.min(a, b), Math.max(a, b) ];
            } else {
                if (args[0] === 0) {
                    [ a, b ] = [ 0, 1 ];
                } else {
                    [ a, b ] = [ Math.min(args[0], 0), Math.max(args[0], 0) ]
                }
            }
        } else {
            if (typeof args[1] === "number") {
                if (args[1] === 0) {
                    [ a, b ] = [ 0, 1 ]
                } else {
                    [ a, b ] = [ Math.min(args[1], 0), Math.max(args[1], 0) ];
                }
            } else {
                [ a, b ] = [ 0, 1 ];
            }
        }
    }

    const f = (x >= a && x <= b) ?
                    () => 1/(b - a)
                :
                    () => 0;

    this.pdf = (...args) => homFn(f, ...args);

    const F = x >= a ? (
                    x <= b ?
                        x => (x - a)/(b - a)
                    :
                        () => 1
                ) :
                    () => 0;

    this.cdf = (...args) => homFn(F, ...args);

    const sample = () => a + (b - a)*Math.random();
}