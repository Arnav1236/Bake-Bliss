"use client";

import Link from "next/link";
import { Camera, Video, Mail, Phone } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.column}>
            <h4>Bake Bliss - Airoli</h4>
            <p>Experience the most luxurious, handcrafted cakes made fresh daily.</p>
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              <Link href="https://instagram.com" target="_blank">
                <Camera size={24} />
              </Link>
              <Link href="https://youtube.com" target="_blank">
                <Video size={24} />
              </Link>
            </div>
          </div>
          
          <div className={styles.column}>
            <h4>Contact Us</h4>
            <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Phone size={18} /> +91 98765 43210
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Mail size={18} /> hello@bakeblissairoli.com
            </p>
          </div>

          <div className={styles.column}>
            <h4>Quick Links</h4>
            <Link href="/about">About the Shop</Link>
            <Link href="/faq">FAQs</Link>
            <Link href="/policies">Shop Policies</Link>
            <Link href="/rewards">Rewards Program</Link>
          </div>

          <div className={styles.column}>
            <h4>Stay Updated</h4>
            <p>Join our newsletter for sweet deals!</p>
            <form className={styles.newsletter} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your Email" className={styles.input} />
              <button type="submit" className={styles.submitBtn}>Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className={styles.bottom}>
          &copy; {new Date().getFullYear()} Bake Bliss - Airoli. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
