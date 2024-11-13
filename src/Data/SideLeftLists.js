import PaymentIcon from '@mui/icons-material/Payment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CollectionsIcon from '@mui/icons-material/Collections';
import { Dashboard } from '../Contents/Sections/Dashboard/Dashboard';
import EnhancedTable from '../Contents/Sections/TableProgram/TableProgram';
import FinancialReportTable from '../Contents/Sections/Financial/Financial';
import Announcement from '../Contents/Sections/Announcement/Annaunchment';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Gallery from '../Contents/Sections/Gallery/Gallery';
export const SideLeftList = () => {
    return([
        {
            title:'Dashboard',
            icon: <DashboardIcon/>,
            linkTo : <Dashboard/>
        },
        
        {
            title:'Program Prioritas',
            icon: <AssignmentIcon/>,
            linkTo:<EnhancedTable/>
        },
        {
            title:'Keuangan',
            icon: <PaymentIcon/>,
            linkTo:<FinancialReportTable/>
        },
        {
            title:'Pengumuman',
            icon: <NotificationsActiveIcon/>,
            linkTo:<Announcement/>
        },
        {
            title:'Dokumentasi',
            icon: <CollectionsIcon/>,
            linkTo:<Gallery/>
        },
    ])
} 