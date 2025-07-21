const { default: latexToImage } = require("@/app/utils/latexToImage.mjs");

export default function ParameterInput({ params, setter }) {
    const setParam = e => {
        if (isNaN(e.target.value)) {
            return;
        }
        const newValue = {};
        newValue[e.target.name] = {
            label: params[e.target.name].label,
            value: Number(e.target.value)
        };
        setter({ ...params, ...newValue })
    }

    return (
        <div className={"w-full flex flex-row justify-center gap-5"}>
            {
                Object.entries(params).map(([ name, obj ], index) => (
                    <label className={"flex flex-row items-center gap-2"} key={index}>
                        {
                            latexToImage(`${obj.label}:`)
                        }
                        <input type="text" value={obj.value} name={name} onChange={setParam} className={"w-[100px] border-1 border-white text-right p-[1px]"} />
                    </label>
                ))
            }
        </div>
    )
}