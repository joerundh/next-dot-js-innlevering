export default function homFn(fn, ...args) {
    /*
    Takes a function fn and a set of arguments in some structure, and returns the output
    of fn for each primitive value contained in args, preserving the structure inside
    an array.

    It's assumed that fn takes a single primitive-type argument.
    */

    if (typeof fn !== "function") {
        return undefined;
    }

    if (args.length === 0) {
        return fn();
    }
    if (args.length === 1) {
        if (args[0] instanceof Array) {
            return args[0].map(x => fn(x));
        } else {
            return args[0];
        }
    }
    return args.map(x => {
        if (x instanceof Array) {
            return homFn(fn, ...x);
        }
        return fn(x);
    });
}