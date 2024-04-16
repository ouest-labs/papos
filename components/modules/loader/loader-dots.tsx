import styles from "./styles/loader.module.css";

interface LoadingDotsProps {
  color?: string;
}

const LoadingDots = ({
  color = "hsl(var(--muted-foreground))",
}: LoadingDotsProps) => {
  return (
    <span className={styles.loading}>
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
    </span>
  );
};

export default LoadingDots;
