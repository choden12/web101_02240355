import styles from './app.css';

export default function Dashboard() {
  return (
    <main className={styles.main}>
      <h1>Sales Analytics Dashboard</h1>

      <div className={styles.grid}>
        <section className={styles.card}>
          <h2>Monthly Sales Performance</h2>
          <div className={styles.chartContainer} id="monthly-sales-chart">
            {/* Chart will go here */}
          </div>
        </section>

        <section className={styles.card}>
          <h2>Product Category Distribution</h2>
          <div className={styles.chartContainer} id="product-category-chart">
            {/* Chart will go here */}
          </div>
        </section>

        <section className={styles.card}>
          <h2>Customer Acquisition</h2>
          <div className={styles.chartContainer} id="customer-acquisition-chart">
            {/* Chart will go here */}
          </div>
        </section>

        <section className={styles.card}>
          <h2>Weekly Visitors</h2>
          <div className={styles.chartContainer} id="weekly-visitors-chart">
            {/* Chart will go here */}
          </div>
        </section>
      </div>
    </main>
  );
}