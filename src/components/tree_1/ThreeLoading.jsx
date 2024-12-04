import { Html, useProgress } from "@react-three/drei";

export default ThreeLoading

function ThreeLoading() {
    const { progress } = useProgress()

    return (
        <Html
            center
            as="div"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}
        >
            <span className="canvas-loader"></span>
            <p
                style={{
                    color: '#F1F1F1',
                    fontSize: 14,
                    fontWeight: 800,
                    marginTop: 40,
                }}
            >
                { progress !== 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
            </p>
        </Html>
    )
}