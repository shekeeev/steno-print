import React from 'react';
import f from './Footer.module.css'
import { Link, NavLink } from 'react-router-dom';
import insta from '../../Assets/Images/insta.svg'
import vk from '../../Assets/Images/vk.svg'
import ruso from '../../Assets/Images/ruso.svg'
const Footer = () => {
    return (
        <footer className={f.footer}>
            <div className={f.container}>
                <div className={f.div}>
                    <h2> Каталог товаров</h2>
                    <ul className={f.ul}>
                        <li>
                            <NavLink to={'/disain_oboi'}>
                                <p>Дизайнерские обои</p>
                                <p>Фирменные обои</p>
                                <p>Виниловые обои</p>
                                <p>Дизайнерские обои</p>
                                <p>Фирменные обои</p>
                                <p>Виниловые обои</p>
                            </NavLink>
                        </li>
                    </ul>

                </div>

                <div className={f.secondDiv}>
                    <ul className={f.ul}>
                        <li>
                            <NavLink to={'/disain_oboi'}>
                                <p>Дизайнерские обои</p>
                                <p>Фирменные обои</p>
                                <p>Виниловые обои</p>
                                <p>Дизайнерские обои</p>

                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className={f.threeDiv}>
                    <h2> Наши услуги</h2>
                    <ul className={f.ul}>
                        <li>
                            <NavLink to={'/services'}>
                                <p>Создание уникального дизайна в квартире, доме, офисе</p>
                                <p>Оформление офисов и коммерческих помещений в фирменном стиле</p>
                                <p>Функциональный дизайн. Нанесение указателей, вывесок</p>
                                <p>Печать фотографий и коллажей</p>

                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className={f.fourDiv}>
                    <NavLink to={'/about_studio'}>
                        <p>О студии</p>


                    </NavLink>

                    <NavLink to={'/portfolio'}>
                        <p>Портфолио</p>


                    </NavLink>

                    <NavLink to={'/blog'}>
                        <p>Блог</p>


                    </NavLink>

                    <NavLink to={'/contacs'}>
                        <p>Контакты</p>


                    </NavLink>

                </div>



                <div className={f.fiveDiv}>
                    <div className={f.phoneW}>
                        <p className={f.phone}>Позвонить нам:</p>
                        <a className={f.whatsapp} href="https://api.whatsapp.com/send?phone=996702240305">+7 (555) 888-98-66</a>
                    </div>
                    <div className={f.phoneE}>
                        <p>Написать нам:</p>
                        <a href="#">info@stenoprint.ru</a>
                    </div>
                    <img className={f.insta} src={insta} alt="insta" />
                    <img className={f.vk} src={vk} alt="vk" />

                </div>




            </div>

            <div className={f.last}>
                <h4>© 2022 StenoPrint. Все права защищены.</h4>
                <p>Сделано в</p>
                <img src={ruso} alt="" />
            </div>
        </footer>
    );
};

export default Footer;