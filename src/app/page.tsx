import styles from "./page.module.css";
import Configurator from "@/components/Configurator";
import Link from "next/link";
import Image from "next/image";
import { Camera } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Image 
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2000&auto=format&fit=crop"
          alt="Premium dark moody chocolate cake"
          fill
          priority
          style={{ objectFit: 'cover', zIndex: 1, opacity: 0.7 }}
        />
        <div className={styles.heroContent}>
          <div className={styles.offerBadge}>Flat 20% OFF + Free Delivery (5km)</div>
          <h1 className={styles.heroTitle}>Sensory Perfection in Every Bite</h1>
          <p className={styles.heroSubtitle}>
            Experience Airoli's most luxurious, handcrafted cakes. Made fresh daily with premium ingredients.
          </p>
          <Link href="/cakes" className="btn-primary" style={{ fontSize: '18px', padding: '15px 30px' }}>
            Explore Our Cakes
          </Link>
        </div>
      </section>

      {/* Build-Your-Layer Configurator */}
      <section className={`container ${styles.section}`} style={{ backgroundColor: '#FDFBF7' }}>
        <Configurator />
      </section>

      {/* Bundle Deals */}
      <section className={`container ${styles.section}`}>
        <h2 className={styles.sectionTitle}>Curated For You</h2>
        <div className={styles.bundlesGrid}>
          
          <div className={styles.bundleCard}>
            <div className={styles.bundleImage}>
              <Image 
                src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=600&auto=format&fit=crop" 
                alt="Birthday Pack"
                width={400}
                height={250}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className={styles.bundleContent}>
              <h3 className={styles.bundleTitle}>Full Birthday Celebration Pack</h3>
              <p className={styles.bundleDesc}>
                Everything you need: A premium 1kg cake, party pops, candles, and a customized greeting card.
              </p>
              <button className="btn-secondary">View Details</button>
            </div>
          </div>

          <div className={styles.bundleCard}>
            <div className={styles.bundleImage}>
              <Image 
                src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=600&auto=format&fit=crop" 
                alt="Special Cakes"
                width={400}
                height={250}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className={styles.bundleContent}>
              <h3 className={styles.bundleTitle}>Birthday Special Cakes</h3>
              <p className={styles.bundleDesc}>
                Our best-selling signature cakes crafted especially for memorable birthdays.
              </p>
              <button className="btn-secondary">Shop Now</button>
            </div>
          </div>

          <div className={styles.bundleCard}>
            <div className={styles.bundleImage}>
              <Image 
                src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=600&auto=format&fit=crop" 
                alt="Custom Cakes"
                width={400}
                height={250}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className={styles.bundleContent}>
              <h3 className={styles.bundleTitle}>Custom Cakes</h3>
              <p className={styles.bundleDesc}>
                Have a specific theme in mind? We bring your imagination to life with bespoke designs.
              </p>
              <button className="btn-secondary">Enquire Now</button>
            </div>
          </div>

        </div>
      </section>

      {/* Social Proof Section */}
      <section className={styles.section} style={{ backgroundColor: '#EAE6DF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className={styles.sectionTitle} style={{ marginBottom: '10px' }}>Join Our Community</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>Follow us on Instagram @bakebliss.airoli for live assembly videos and more!</p>
          </div>
          
          <div className={styles.socialGrid}>
            <div className={styles.socialItem}><Camera size={32} /></div>
            <div className={styles.socialItem}><Camera size={32} /></div>
            <div className={styles.socialItem}><Camera size={32} /></div>
            <div className={styles.socialItem}><Camera size={32} /></div>
          </div>
        </div>
      </section>
    </div>
  );
}
