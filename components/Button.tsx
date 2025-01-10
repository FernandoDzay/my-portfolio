


type Props = {
    loading?: boolean
    children: React.ReactNode
    color?: 'blue'|'green'|'grey'|'default'
    type?: "submit" | "reset" | "button"
    className?: string
}

const Button:React.FC<Props> = (props) => {
    const background = {
        blue: 'bg-[#2f80ed]',
        green: 'bg-[#4CAF50]',
        grey: 'bg-[#555555]',
        default: 'bg-tertiary',
    }


    return (
        <button
            disabled={props.loading}
            type={props.type}
            className={`${background[props.color || 'default']}${props.className ? (' ' + props.className) : ''} btn-icon flex items-center gap-2 transition-all hover:scale-105 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary`}
        >
            {props.loading ? "Sending..." : props.children}
        </button>
    )
}

export default Button