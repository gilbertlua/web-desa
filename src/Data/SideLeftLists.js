import PaymentIcon from '@mui/icons-material/Payment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import CollectionsIcon from '@mui/icons-material/Collections';

export const SideLeftList = () => {
    return([
        {
            title:'Dashboard',
            icon: <DashboardIcon/>
        },
        {
            title:'Keuangan',
            icon: <PaymentIcon/>
        },
        {
            title:'Pengaduan',
            icon: <ChatBubbleIcon/>
        },
        {
            title:'Pengumuman',
            icon: <NotificationsActiveIcon/>
        },
        {
            title:'Bantuan',
            icon: <CardGiftcardIcon/>
        },
        {
            title:'Dokumentasi',
            icon: <CollectionsIcon/>
        },
    ])
} 