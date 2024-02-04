import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useLogout } from '../../api/useAuth';
import { useNavigate } from 'react-router-dom';
import { useLocation, Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import axios from 'axios';
import { apiBaseUrl } from '../../constant/constant';
import { getCookie } from '../../utils/api';

const cx = classNames.bind(styles);

function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [title, setTitle] = React.useState(false);
    const [details, setDetails] = React.useState(false);
    const open = Boolean(anchorEl);

    const location = useLocation();

    React.useEffect(() => {
        if (location.pathname.includes('product/P') || location.pathname.includes('category')) {
            setDetails(true);
            setTitle('Quay lại danh sách sản phẩm');
        } else if (location.pathname.includes('liststudent/20')) {
            setTitle('Thông tin sinh viên');
            setDetails(false);
        }
        // care/customers
        // care/feedbacks
        // booking
        // receipt_inventory
        // check_inventory
        else if (location.pathname.includes('student/teacher')) {
            setTitle('Thông tin giảng viên');
            setDetails(false);
        }
        else if (location.pathname.includes('bookmeeting')) {
            setTitle('Đặt lịch hẹn');
            setDetails(false);
        }
        else if (location.pathname.includes('booking')) {
            setTitle('Đặt hàng');
            setDetails(false);
        }
        else if (location.pathname.includes('freetime')) {
            setTitle('Danh sách lịch rảnh');
            setDetails(false);
        }
        else if (location.pathname.includes('nextmeet')) {
            setTitle('Cuộc gặp sắp tới');
            setDetails(false);
        } else if (location.pathname.includes('liststudent')) {
            setTitle('Danh sách sinh viên');
            setDetails(false);
        } else {
            setTitle('Tổng quan');
            setDetails(false);
        }
    }, [location]);

    const navigate = useNavigate();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const { mutate: logout } = useLogout();

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Box
                sx={{
                    display: 'flex',
                    // padding: '4px 0',
                    width: '100%',
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundColor: '#fefefe',
                    borderRadius: '6px',
                    justifyContent: 'space-between',
                    border: '1px solid #1976d2',
                }}
            >
                <div style={{ display: 'flex' }}>
                    <Typography sx={{ minWidth: 100, margin: '0 30px' }}>
                        {details ? (
                            <Link
                                to={'/inventory/product'}
                                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
                            >
                                <ArrowBackIosIcon sx={{ width: '14px', height: '14px' }} />
                                {title}
                            </Link>
                        ) : (
                            title
                        )}
                    </Typography>
                    {details ? '' : <MoreVertIcon />}
                </div>
                <Tooltip title="Account settings">
                    <Box
                        onClick={handleClick}
                        size="small"
                        // className={cx('account')}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            padding: '8px',
                            borderRadius: '4px',
                            height: '100%',
                            marginRight: '14px',
                        }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }} />
                    </Box>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem
                    onClick={() => {
                        handleClose();
                        logout();
                        const jwt =getCookie('Authorization')
                        if(jwt){
                            logout();
                        }
                        navigate('/');
                        window.location.reload()
                    }}
                >
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Thoát
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}

function Header() {
    return (
        <div className={cx('header')}>
            <AccountMenu />
        </div>
    );
}

export default Header;
