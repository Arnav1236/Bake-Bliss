"use client";

import Link from "next/link";
import { ShoppingCart, Menu } from "lucide-react";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";

export default function Header({ authButton }: { authButton?: React.ReactNode }) {
  const [countdown, setCountdown] = useState("02:15:00");

  useEffect(() => {
    // Simple mock countdown for demonstration
    const timer = setInterval(() => {
      setCountdown((prev) => {
        const [hours, minutes, seconds] = prev.split(":").map(Number);
        if (hours === 0 && minutes === 0 && seconds === 0) return "00:00:00";
        let newSeconds = seconds - 1;
        let newMinutes = minutes;
        let newHours = hours;
        
        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }
        
        return `${String(newHours).padStart(2, "0")}:${String(newMinutes).padStart(2, "0")}:${String(newSeconds).padStart(2, "0")}`;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className={styles.urgencyBanner}>
        Order in the next {countdown} for Same-Day Delivery!
      </div>
      <header className="container">
        <div className={styles.header}>
          <Link href="/" className={styles.logo}>
            Bake Bliss
          </Link>

          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/cakes" className={styles.navLink}>Cakes</Link>
            <Link href="/blog" className={styles.navLink}>Blog</Link>
            <Link href="/rewards" className={styles.navLink}>Rewards</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
          </nav>

          <div className={styles.actions}>
            {authButton}
            <button className={styles.iconBtn}>
              <ShoppingCart size={24} />
            </button>
            <button className={styles.iconBtn}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
