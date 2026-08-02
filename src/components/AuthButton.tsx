import { auth, signIn, signOut } from "@/auth";
import { User, LogOut } from "lucide-react";
import Link from "next/link";
import styles from "./Header.module.css";

export default async function AuthButton() {
  const session = await auth();

  if (session?.user) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        {session.user.role === "ADMIN" && (
          <Link href="/admin" className={styles.navLink} style={{ color: 'var(--color-accent)' }}>
            Admin Dashboard
          </Link>
        )}
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button type="submit" className={styles.iconBtn} title="Sign Out">
            <LogOut size={24} />
          </button>
        </form>
      </div>
    );
  }

  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <button type="submit" className={styles.iconBtn} title="Sign In">
        <User size={24} />
      </button>
    </form>
  );
}
