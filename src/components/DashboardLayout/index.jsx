import Sidebar from "../sidebar";
import './index.scss'
import Footer from "../footer";
import MobileHeader from "../mobileHeader";

const DashboardLayout = ({ children }) => {
    return(
        <div className="dashboard">
            <Sidebar />
            <div className="main__content-wrapper">
                <div className="main__content">
                    <MobileHeader />
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )
};

export default DashboardLayout;