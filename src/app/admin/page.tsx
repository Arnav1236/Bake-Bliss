import styles from "./page.module.css";
import { TrendingUp } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Overview</h1>
        <div style={{ display: 'flex', gap: '15px' }}>
          <span style={{ padding: '8px 15px', backgroundColor: 'white', borderRadius: '6px', fontWeight: 'bold' }}>Today: ₹24,500</span>
          <span style={{ padding: '8px 15px', backgroundColor: 'var(--color-primary-dark)', color: 'white', borderRadius: '6px' }}>+ New Order</span>
        </div>
      </div>

      <div className={styles.grid}>
        {/* Order Management (Kanban) */}
        <div className={styles.card} style={{ gridColumn: '1 / -1' }}>
          <h2 className={styles.cardTitle}>Live Orders</h2>
          <div className={styles.kanbanBoard}>
            <div className={styles.kanbanColumn}>
              <div className={styles.kanbanColumnTitle}>New</div>
              <div className={`${styles.kanbanCard} ${styles.urgent}`}>
                <div className={styles.orderId}>#ORD-8923</div>
                <div className={styles.orderItem}>Build-Your-Layer (Red Velvet)</div>
                <div className={styles.priorityFlag}>10-Min Live Assembly</div>
              </div>
              <div className={styles.kanbanCard}>
                <div className={styles.orderId}>#ORD-8924</div>
                <div className={styles.orderItem}>Signature Chocolate Truffle</div>
              </div>
            </div>
            
            <div className={styles.kanbanColumn}>
              <div className={styles.kanbanColumnTitle}>In Assembly</div>
              <div className={`${styles.kanbanCard} ${styles.urgent}`}>
                <div className={styles.orderId}>#ORD-8920</div>
                <div className={styles.orderItem}>Build-Your-Layer (Vanilla)</div>
                <div className={styles.priorityFlag}>10-Min Live Assembly</div>
              </div>
            </div>
            
            <div className={styles.kanbanColumn}>
              <div className={styles.kanbanColumnTitle}>Out for Delivery</div>
              <div className={styles.kanbanCard}>
                <div className={styles.orderId}>#ORD-8915</div>
                <div className={styles.orderItem}>Birthday Celebration Pack</div>
              </div>
            </div>
            
            <div className={styles.kanbanColumn}>
              <div className={styles.kanbanColumnTitle}>Completed</div>
              <div className={styles.kanbanCard} style={{ opacity: 0.6 }}>
                <div className={styles.orderId}>#ORD-8910</div>
                <div className={styles.orderItem}>Custom Theme Cake</div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer CRM */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Recent Customers</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Purchases</th>
                <th>Loyalty Pts</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Priya Sharma</td>
                <td>4</td>
                <td>1,200</td>
              </tr>
              <tr>
                <td>Rahul Verma</td>
                <td>1</td>
                <td>500</td>
              </tr>
              <tr>
                <td>Sneha Patel</td>
                <td>12</td>
                <td>4,500</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Promotions & Revenue */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Revenue <TrendingUp size={20} color="green" /></h2>
            <div style={{ height: '150px', backgroundColor: '#F8F9FA', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
              [ Revenue Chart Placeholder ]
            </div>
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Promotions Manager</h2>
            <div className={styles.toggleRow}>
              <span className={styles.toggleLabel}>Grand Opening (20% OFF)</span>
              <div className={styles.toggleSwitch}></div>
            </div>
            <div className={styles.toggleRow}>
              <span className={styles.toggleLabel}>Free Delivery {`<`} 5km</span>
              <div className={styles.toggleSwitch}></div>
            </div>
            <div className={styles.toggleRow} style={{ borderBottom: 'none' }}>
              <span className={styles.toggleLabel}>Midnight Delivery Surcharge</span>
              <div className={styles.toggleSwitch} style={{ backgroundColor: '#ccc' }}></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
