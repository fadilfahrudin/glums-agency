
interface Props {
    width?: number,
    height?: number
}
const Gap = ({ width, height }: Props) => {
    return (
        <span style={{ width, height, display: 'block' }} />
    )
}

export default Gap