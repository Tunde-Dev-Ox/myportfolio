import Sidebar from "../sidebar";
import './index.scss'
import Footer from "../footer";
import MobileHeader from "../mobileHeader";
import MobileFooterMenu from "../mobileFooterMenu";

const DashboardLayout = ({ children }) => {
    return(
        <div className="dashboard">
            <Sidebar />
            {/* <MobileHeader /> */}
            <div className="main__content-wrapper">
                <div className="main__content">
                    <MobileHeader />
                    {children}
                    <MobileFooterMenu />
                </div>
                <Footer />
            </div>
        </div>
    )
};

export default DashboardLayout;