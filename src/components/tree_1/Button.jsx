export default Button

function Button({ name, isBeam = false, containerClass = "" }) {
    return (
        <button className={`btn gap-4 mx-auto p-2 ${containerClass}`}>
            {
                isBeam && (
                    <span className="relative flex h-3 w-3">
                        <span className="btn-ping"></span>
                        <span className="btn-ping-dot"></span>
                    </span>
                )
            }
            {
                name
            }
        </button>
    )
}
