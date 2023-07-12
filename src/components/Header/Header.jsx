import styled from 'styled-components';
import logoIcon from 'assets/logo.svg';
import menuIconLight from 'assets/menu-icon-light.svg';
import { Button } from 'components/Button';

const StyledHeader = styled.div`
    .header {
        background-color: #190401;
        width: 1406px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 17px;
    }
    .c {
        filter: brightness(0) saturate(100%) invert(13%) sepia(70%) saturate(7479%) hue-rotate(22deg) brightness(91%) contrast(118%);
    }
    
    .menu-nav {
        ul {
            padding: 0;
            margin: 0;
            display: flex;
            align-items: center;
        }
        ul li {
            text-decoration: none;
            display: inline-block;
            margin-left: 12px;
        }
    }
    .login {
        display: flex;
        gap: 5px;
    }
    .line-white {
        border: 1px solid white;
        margin: 0;
    }
`
export const Header = () => {
    return (
        <StyledHeader>
            <div className='header'>
                <div className='menuicon'>
                    <img src={menuIconLight} alt=""  className='c'/>
                </div>
                <div className='menu-nav'>
                    <ul>
                        <li><Button title={"ABOUT"} text_color={"white"} width={"98px"} height={"19px"} radius={"40px"} border_custom={"2px solid transparent"} font_size_text={"12px"}></Button></li>
                        <li><Button title={"MOVIES"} text_color={"white"} width={"98px"} height={"19px"} radius={"40px"} border_custom={"2px solid transparent"} font_size_text={"12px"}></Button></li>
                        <li className='logo'><img src={logoIcon} alt="" /></li>
                        <li><Button title={"SERIES"} text_color={"white"} width={"98px"} height={"19px"} radius={"40px"} border_custom={"2px solid transparent"} font_size_text={"12px"}></Button></li>
                        <li><Button title={"UPCOMING"} text_color={"white"} width={"98px"} height={"19px"} radius={"40px"} border_custom={"2px solid transparent"} font_size_text={"12px"}></Button></li>
                    </ul>
                </div>
                <div className='login'>
                    <Button title={"SIGNIN"} text_color={"white"} width={"49px"} height={"19px"} radius={"40px"} border_custom={"2px solid transparent"} font_size_text={"11px"}></Button>
                    <Button title={"SIGNUP"} text_color={"white"} width={"49px"} height={"19px"} radius={"40px"} border_custom={"2px solid transparent"} font_size_text={"11px"}></Button>
                </div>
            </div>
            <hr className='line-white'/>
        </StyledHeader>
    )
}