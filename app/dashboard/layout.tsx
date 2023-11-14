import { Navbar, Sidebar } from "@/components/ui"
import styles from "../../components/ui/dashboard.module.css"

const DashboardLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout