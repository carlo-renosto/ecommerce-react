import styles from './Dashboard.module.scss';

function Dashboard({ children }) {
  return (
    <div className={styles.dashboard}>
      <div>{children}</div>
    </div>
  );
}

export default Dashboard;