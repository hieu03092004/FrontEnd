import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { LogOut } from '../Logout/Logout';
import { useAuth } from '../../hooks/useAuth';
import { Avatar } from '@mui/material';
import { stringAvatar } from '../../helpers/stringAvatar';
export const Header = () => {
    const user=useAuth();
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                                Logo
                            </Link>
                        </Typography>
                        {user !== undefined && (
                            <>
                                {user ?(<>
                                <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>
                                    <Avatar {...stringAvatar(user.infoUser.fullName)}/>
                                </Link>
                                <LogOut />
                                </>):(<>
                                    <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
                                        <Button color="inherit">
                                            Đăng nhập
                                        </Button>
                                    </Link>
                                    <Link to="/register" style={{ color: "white", textDecoration: "none" }}>
                                        <Button color="inherit">
                                            Đăng ký
                                        </Button>
                                    </Link>
                                </>)}
                            </>
                        )}

                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}