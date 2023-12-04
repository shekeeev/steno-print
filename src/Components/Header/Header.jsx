import React from 'react';
import h from './Header.module.css'
import logo from '../../Assets/Images/logo.png'
import search from '../../Assets/Images/search.svg'
import insta from '../../Assets/Images/insta.svg'
import vk from '../../Assets/Images/vk.svg'
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <header className={h.header} >
            <Link to={'/'}>
                < img className={h.logo} width={136} height={124} src={logo} alt="logo" />
            </Link>
            <div className={h.search}>

                <div className={h.div}>

                    <div className={h.headerInp}>
                        <img className={h.searchImg} src={search} alt="search" />
                        <input type="text" placeholder='Поиск ...' />
                    </div>

                    <div className={h.firstDiv}>
                        <div className={h.phoneW}>
                            <p className={h.phone}>Позвонить нам:</p>
                            <a className={h.whatsapp} href="https://api.whatsapp.com/send?phone=996702240305">+7 (555) 888-98-66</a>
                        </div>
                        <div className={h.phoneE}>
                            <p>Написать нам:</p>
                            <a href="#">info@stenoprint.ru</a>
                        </div>
                        <img className={h.insta} src={insta} alt="insta" />
                        <img className={h.vk} src={vk} alt="vk" />

                    </div>

                </div>

                <div>
                    <ul className={h.ul}>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? ' active menu_item' : 'menu_item'
                            }
                                to={'/catalog'}>
                                <div className={h.active}> Каталог товаров</div>

                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? 'active menu_item' : 'menu_item'
                            }
                                to={'/services'}>
                                <div className={h.active}>Наши услуги</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? 'active menu_item' : 'menu_item'
                            }
                                to={'/about_studio'}>
                                <div className={h.active}>О студии</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? 'active menu_item' : 'menu_item'
                            }
                                to={'/portfolio'}>
                                <div className={h.active}>Портфолио</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? 'active menu_item' : 'menu_item'
                            }
                                to={'/blog'}>
                                <div className={h.active}>Блог</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? 'active menu_item' : 'menu_item'
                            }
                                to={'/contacs'}>
                                <div className={h.active}>Контакты</div>
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </div>



        </header >
    );
};

export default Header;