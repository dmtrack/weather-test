import styles from './Chip.module.scss';

type ChipProps = {
    label?: string;
    value: string | number;
};

function Chip({ label, value }: ChipProps) {
    return (
        <>
            <span className={styles.chip}>
                {label}: {value}
            </span>
        </>
    );
}

export default Chip;
