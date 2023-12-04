import React from 'react';
import c from './Catalog.module.css'
import HomeIcon from '../../../../Assets/Bayel/home.png'
import flamingoImg from '../../../../Assets/Bayel/catalog_flamingo.png'
import softImg from '../../../../Assets/Bayel/soft.png'
import sofaImg from '../../../../Assets/Bayel/sofa.png'
import chairImg from '../../../../Assets/Bayel/chair.png'
import pillowImg from '../../../../Assets/Bayel/pillow.png'
import brushIcon from '../../../../Assets/Bayel/brushIcon.png'
import Pagination from '@mui/material/Pagination';
// import { Link } from '@mui/material';
import { Link } from 'react-router-dom';
const Catalog = () => {


    return (
        <section className={c.CatalogSection}>
            <button className={c.brushIcon}><img src={brushIcon} alt="" /></button>
            <div className={c.container}>
                <div className={c.Catalog_title}>
                    <div className={c.Catalog_title_item}>
                        <img src={HomeIcon} alt="logo" />
                        <p>/</p>
                        <p>Каталог товаров</p>
                    </div>
                    <h2>Каталог товаров</h2>
                    <div className={c.Catalog_box}>
                        <Link to={'/disain_oboi'}>
                            <div className={c.Catalog_box_card}>
                                <div className={c.cardImg}>
                                    <img src={flamingoImg} alt="fla" />
                                </div>
                                <div className={c.cardTitle}>
                                    <h3>Дизайнерские обои</h3>
                                    <button>150 товаров</button>
                                </div>

                            </div>
                        </Link>
                        <Link to={'/disain_oboi'}>

                            <div className={c.Catalog_box_card}>
                                <div className={c.cardImg}>
                                    <img src={flamingoImg} alt="fla" />
                                </div>
                                <div className={c.cardTitle}>
                                    <h3>Виниловые обои</h3>
                                    <button>53 товаров</button>
                                </div>

                            </div>
                        </Link>
                        <Link to={'/disain_oboi'}>
                            <div className={c.Catalog_box_card}>
                                <div className={c.cardImg}>
                                    <img src={flamingoImg} alt="fla" />
                                </div>
                                <div className={c.cardTitle}>
                                    <h3>Фирменные обои</h3>
                                    <button>25 товаров</button>
                                </div>

                            </div>
                        </Link>
                    </div>
                </div>



                <div className={c.CatalogContent}>
                    <div className={c.CatalogContent_select}>
                        <select name="" id="" placeholder=''>
                            <option value="">Коллекции</option>
                            <option value="">Градиенты</option>
                            <option value="">Акварель</option>
                            <option value="">Модерн</option>
                            <option value="">Цветы</option>
                            <option value="">Классика</option>

                        </select>

                        <select name="" id="" placeholder=''>
                            <option value="">Материал</option>
                            <option value="">Серия R GOLD</option>
                            <option value="">Серия R BLUE</option>
                            <option value="">Серия SR PS</option>
                            <option value="">Серия ATRIUM</option>

                        </select>

                        <select name="" id="" placeholder=''>
                            <option value="">Цвет</option>
                            <option value=""></option>
                        </select>

                        <select name="" id="" placeholder=''>
                            <option value="">Цена</option>
                            <option value=""></option>
                        </select>

                        <div className={c.content_btn}>
                            <button className={c.btn_left}>Применить</button>
                            <button className={c.btn_right}>Сбросить</button>
                        </div>
                    </div>


                    <div className={c.CatalogContent_card}>
                        <div className={c.cardItem}>
                            <img src={softImg} alt="logo" />
                            <div className={c.cardItemTitle}>
                                <div className={c.cardItem_left}>
                                    <h3>Floraison</h3>
                                    <h4>Артикул: 11039</h4>
                                </div>
                                <div className={c.cardItem_rigth}>
                                    <h5>от 2 552 ₽ / м2</h5>
                                    <p>от 3 452 ₽ / м2</p>
                                </div>
                            </div>
                        </div>
                        <div className={c.cardItem}>
                            <img src={chairImg} alt="logo" />
                            <div className={c.cardItemTitle}>
                                <div className={c.cardItem_left}>
                                    <h3>Floraison</h3>
                                    <h4>Артикул: 11039</h4>
                                </div>
                                <div className={c.cardItem_rigth}>
                                    <h5>от 2 552 ₽ / м2</h5>
                                    <p>от 3 452 ₽ / м2</p>
                                </div>
                            </div>
                        </div>
                        <div className={c.cardItem}>
                            <img src={sofaImg} alt="logo" />
                            <div className={c.cardItemTitle}>
                                <div className={c.cardItem_left}>
                                    <h3>Floraison</h3>
                                    <h4>Артикул: 11039</h4>
                                </div>
                                <div className={c.cardItem_rigth}>
                                    <h5>от 2 552 ₽ / м2</h5>
                                    <p>от 3 452 ₽ / м2</p>
                                </div>
                            </div>
                        </div>
                        <div className={c.cardItem}>
                            <img src={pillowImg} alt="logo" />
                            <div className={c.cardItemTitle}>
                                <div className={c.cardItem_left}>
                                    <h3>Floraison</h3>
                                    <h4>Артикул: 11039</h4>
                                </div>
                                <div className={c.cardItem_rigth}>
                                    <h5>от 2 552 ₽ / м2</h5>
                                    <p>от 3 452 ₽ / м2</p>
                                </div>
                            </div>
                        </div>
                        <div className={c.cardItem}>
                            <img src={softImg} alt="logo" />
                            <div className={c.cardItemTitle}>
                                <div className={c.cardItem_left}>
                                    <h3>Floraison</h3>
                                    <h4>Артикул: 11039</h4>
                                </div>
                                <div className={c.cardItem_rigth}>
                                    <h5>от 2 552 ₽ / м2</h5>
                                    <p>от 3 452 ₽ / м2</p>
                                </div>
                            </div>
                        </div>
                        <div className={c.cardItem}>
                            <img src={chairImg} alt="logo" />
                            <div className={c.cardItemTitle}>
                                <div className={c.cardItem_left}>
                                    <h3>Floraison</h3>
                                    <h4>Артикул: 11039</h4>
                                </div>
                                <div className={c.cardItem_rigth}>
                                    <h5>от 2 552 ₽ / м2</h5>
                                    <p>от 3 452 ₽ / м2</p>
                                </div>
                            </div>
                        </div>
                        <div className={c.cardItem}>
                            <img src={sofaImg} alt="logo" />
                            <div className={c.cardItemTitle}>
                                <div className={c.cardItem_left}>
                                    <h3>Floraison</h3>
                                    <h4>Артикул: 11039</h4>
                                </div>
                                <div className={c.cardItem_rigth}>
                                    <h5>от 2 552 ₽ / м2</h5>
                                    <p>от 3 452 ₽ / м2</p>
                                </div>
                            </div>
                        </div>
                        <div className={c.cardItem}>
                            <img src={pillowImg} alt="logo" />
                            <div className={c.cardItemTitle}>
                                <div className={c.cardItem_left}>
                                    <h3>Floraison</h3>
                                    <h4>Артикул: 11039</h4>
                                </div>
                                <div className={c.cardItem_rigth}>
                                    <h5>от 2 552 ₽ / м2</h5>
                                    <p>от 3 452 ₽ / м2</p>
                                </div>
                            </div>
                        </div>
                        <div className={c.cardItem}>
                            <img src={softImg} alt="logo" />
                            <div className={c.cardItemTitle}>
                                <div className={c.cardItem_left}>
                                    <h3>Floraison</h3>
                                    <h4>Артикул: 11039</h4>
                                </div>
                                <div className={c.cardItem_rigth}>
                                    <h5>от 2 552 ₽ / м2</h5>
                                    <p>от 3 452 ₽ / м2</p>
                                </div>
                            </div>
                        </div>

                        <div className={c.cardItem}>
                            <img src={chairImg} alt="logo" />
                            <div className={c.cardItemTitle}>
                                <div className={c.cardItem_left}>
                                    <h3>Floraison</h3>
                                    <h4>Артикул: 11039</h4>
                                </div>
                                <div className={c.cardItem_rigth}>
                                    <h5>от 2 552 ₽ / м2</h5>
                                    <p>от 3 452 ₽ / м2</p>
                                </div>
                            </div>
                        </div>

                        <div className={c.cardItem}>
                            <img src={sofaImg} alt="logo" />
                            <div className={c.cardItemTitle}>
                                <div className={c.cardItem_left}>
                                    <h3>Floraison</h3>
                                    <h4>Артикул: 11039</h4>
                                </div>
                                <div className={c.cardItem_rigth}>
                                    <h5>от 2 552 ₽ / м2</h5>
                                    <p>от 3 452 ₽ / м2</p>
                                </div>
                            </div>
                        </div>

                        <div className={c.cardItem}>
                            <img src={pillowImg} alt="logo" />
                            <div className={c.cardItemTitle}>
                                <div className={c.cardItem_left}>
                                    <h3>Floraison</h3>
                                    <h4>Артикул: 11039</h4>
                                </div>
                                <div className={c.cardItem_rigth}>
                                    <h5>от 2 552 ₽ / м2</h5>
                                    <p>от 3 452 ₽ / м2</p>
                                </div>
                            </div>
                        </div>

                        <div className={c.cardItem}>
                            <img src={pillowImg} alt="logo" />
                            <div className={c.cardItemTitle}>
                                <div className={c.cardItem_left}>
                                    <h3>Floraison</h3>
                                    <h4>Артикул: 11039</h4>
                                </div>
                                <div className={c.cardItem_rigth}>
                                    <h5>от 2 552 ₽ / м2</h5>
                                    <p>от 3 452 ₽ / м2</p>
                                </div>
                            </div>
                        </div>

                        <div className={c.cardItem}>
                            <img src={softImg} alt="logo" />
                            <div className={c.cardItemTitle}>
                                <div className={c.cardItem_left}>
                                    <h3>Floraison</h3>
                                    <h4>Артикул: 11039</h4>
                                </div>
                                <div className={c.cardItem_rigth}>
                                    <h5>от 2 552 ₽ / м2</h5>
                                    <p>от 3 452 ₽ / м2</p>
                                </div>
                            </div>
                        </div>

                        <div className={c.cardItem}>
                            <img src={chairImg} alt="logo" />
                            <div className={c.cardItemTitle}>
                                <div className={c.cardItem_left}>
                                    <h3>Floraison</h3>
                                    <h4>Артикул: 11039</h4>
                                </div>
                                <div className={c.cardItem_rigth}>
                                    <h5>от 2 552 ₽ / м2</h5>
                                    <p>от 3 452 ₽ / м2</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={c.Pagination}>

                    <Pagination count={4} color='primary' />
                </div>

            </div>

        </section>
    );
};

export default Catalog;