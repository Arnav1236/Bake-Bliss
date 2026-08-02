import Link from "next/link";
import { LayoutDashboard, ShoppingBag, Users, BarChart3, Tag } from "lucide-react";
import styles from "./layout.module.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.adminLayout}>
      <aside className={styles.sidebar}>
        <Link href="/admin" className={styles.logo}>
          Bake Bliss Admin
        </Link>
        <nav className={styles.nav}>
          <Link href="/admin" className={`${styles.navLink} ${styles.active}`}>
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link href="/admin/orders" className={styles.navLink}>
            <ShoppingBag size={20} /> Orders (Live)
          </Link>
          <Link href="/admin/customers" className={styles.navLink}>
            <Users size={20} /> CRM
          </Link>
          <Link href="/admin/revenue" className={styles.navLink}>
            <BarChart3 size={20} /> Revenue
          </Link>
          <Link href="/admin/promotions" className={styles.navLink}>
            <Tag size={20} /> Promotions
          </Link>
        </nav>
      </aside>
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}
