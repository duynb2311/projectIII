import Box from '@mui/material/Box';
import logo from '../../assets/images/logo.webp';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { useLocation, Link } from 'react-router-dom';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import Person2Icon from '@mui/icons-material/Person2';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MoreTimeIcon from '@mui/icons-material/MoreTime';

const cx = classNames.bind(styles);
// contained
function NavbarItem({ title, icon, subTitle, variant, location }) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List className={cx('list')}>
            <Button
                className={cx('btn')}
                variant={variant}
                onClick={handleClick}
                startIcon={icon}
                sx={{ justifyContent: 'flex-start', padding: '6px 16px' }}
            >
                <span className={cx('title')}>{title}</span>
            </Button>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {subTitle?.map((item, key) =>
                        item?.path ? (
                            <Link to={item.path} key={key} style={{ textDecoration: 'none' }}>
                                <ListItemButton
                                    onClick={() => {
                                        console.log(item);
                                    }}
                                    sx={{ padding: '4px 0 4px 50px' }}
                                >
                                    <ListItemText sx={{ color: '#898989' }} primary={item?.title} />
                                </ListItemButton>
                            </Link>
                        ) : (
                            <ListItemButton
                                onClick={() => {
                                    setOpen(true);
                                }}
                                key={key}
                                sx={{ padding: '4px 0 4px 50px' }}
                            >
                                <ListItemText sx={{ color: '#898989' }} primary={item?.title} />
                            </ListItemButton>
                        ),
                    )}
                </List>
            </Collapse>
        </List>
    );
}

function Sidebar() {
    const location = useLocation();

    const storageKey = JSON.parse(localStorage.getItem('storageKey'))

    return (
        <Box className={cx('sidebar')}>
            {(storageKey.role==="STUDENT")?<Stack spacing={0} className={cx('container')}>
                <div className='logo'>
                    <h3>QUẢN LÝ ĐỒ ÁN</h3>
                    <p>Sinh viên: <strong>{storageKey.username}</strong></p>
                </div>
                <Link to={'/student/teacher'} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <NavbarItem
                        location={location}
                        title={'Giảng viên'}
                        icon={<Person2Icon />}
                        variant={location.pathname.includes('teacher') ? 'contained' : 'text'}
                    />
                </Link>
                <Link to={'/student/bookmeeting'} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <NavbarItem
                        location={location}
                        title={'Đặt lịch hẹn'}
                        icon={<AccessTimeFilledIcon />}
                        variant={location.pathname.includes('bookmeeting') ? 'contained' : 'text'}
                    />
                </Link>
                <Link to={'/student/nextmeet'} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <NavbarItem
                        location={location}
                        title={'Cuộc gặp sắp tới'}
                        icon={<AccessAlarmsIcon/>}
                        variant={location.pathname.includes('nextmeet') ? 'contained' : 'text'}
                    />
                </Link>
                
            </Stack>:
            <Stack spacing={0} className={cx('container')}>
            <div className='logo'>
                <h3>QUẢN LÝ ĐỒ ÁN</h3>
                <p>Giảng viên:</p>
                <p><strong>Trương Thị Diệu Linh</strong></p>
            </div>
            <Link to={'/teacher/liststudent'} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <NavbarItem
                    location={location}
                    title={'Danh sách sinh viên'}
                    icon={<ListAltIcon />}
                    variant={location.pathname.includes('liststudent') ? 'contained' : 'text'}
                />
            </Link>
            <Link to={'/teacher/freetime'} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <NavbarItem
                    location={location}
                    title={'Tạo lịch rảnh'}
                    icon={<MoreTimeIcon />}
                    variant={location.pathname.includes('freetime') ? 'contained' : 'text'}
                />
            </Link>
            <Link to={'/teacher/nextmeet'} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <NavbarItem
                        location={location}
                        title={'Cuộc gặp sắp tới'}
                        icon={<AccessAlarmsIcon/>}
                        variant={location.pathname.includes('nextmeet') ? 'contained' : 'text'}
                    />
                </Link>
        </Stack>}
        </Box>
    );
}

export default Sidebar;
