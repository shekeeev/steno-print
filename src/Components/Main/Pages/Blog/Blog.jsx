import React from 'react';
import bb from './Blog.module.css'
import frame from '../../../../Assets/Images/Frame 88.png'
import search from '../../../../Assets/Images/search.svg'
// import imageELeven from '../../../../Assets/Images/image 11.png'
import eye from '../../../../Assets/Images/eye.svg'
import frameRed from '../../../../Assets/Images/Frame 144.png'
import { Pagination } from '@mui/material';
import { Link } from 'react-router-dom';
const Blog = () => {
    return (
        <div className={bb.body}>
            <div className={bb.container}>
                <div className={bb.blog}>
                    <img src={frame} alt="" />
                    <h2>Блог </h2>
                </div>
                <div className={bb.display}>
                    <div className={bb.inp}>
                        <img src={search} alt="" />
                        <input type="text" placeholder='Поиск в блоге...' />
                    </div>

                    <div className={bb.select}>
                        <select name="Все категории" id="Все категории">

                            <option value="">Антигравийная пленка</option>
                            <option value="">Антигравийная пленка</option>
                            <option value="">Антигравийная пленка</option>
                            <option value="">Антигравийная пленка</option>
                        </select>
                    </div>

                </div>



                <div className={bb.threeCard}>


                    <Link to={'/blog_detal'}>

                        <div className={bb.card}>

                            <img className={bb.image} src={frameRed} alt="" />

                            <div className={bb.cardWhite}>
                                <h3>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h3>
                                <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира,</p>
                                <div className={bb.displayy}>
                                    <img src={eye} alt="" />
                                    <h3>3833</h3>
                                    <p>22 мая 2022</p>
                                </div>
                            </div>

                        </div>
                    </Link>

                    <Link to={'/blog_detal'}>
                        <div className={bb.card}>

                            <img className={bb.image} src={frameRed} alt="" />

                            <div className={bb.cardWhite}>
                                <h3>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h3>
                                <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира,</p>
                                <div className={bb.displayy}>
                                    <img src={eye} alt="" />
                                    <h3>3833</h3>
                                    <p>22 мая 2022</p>
                                </div>
                            </div>

                        </div>
                    </Link>
                    <Link to={'/blog_detal'}>
                        <div className={bb.card}>

                            <img className={bb.image} src={frameRed} alt="" />

                            <div className={bb.cardWhite}>
                                <h3>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h3>
                                <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира,</p>
                                <div className={bb.displayy}>
                                    <img src={eye} alt="" />
                                    <h3>3833</h3>
                                    <p>22 мая 2022</p>
                                </div>
                            </div>

                        </div>
                    </Link>
                    <Link to={'/blog_detal'}>
                        <div className={bb.card}>

                            <img className={bb.image} src={frameRed} alt="" />

                            <div className={bb.cardWhite}>
                                <h3>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h3>
                                <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира,</p>
                                <div className={bb.displayy}>
                                    <img src={eye} alt="" />
                                    <h3>3833</h3>
                                    <p>22 мая 2022</p>
                                </div>
                            </div>

                        </div>
                    </Link>
                    <Link to={'/blog_detal'}>
                        <div className={bb.card}>

                            <img className={bb.image} src={frameRed} alt="" />

                            <div className={bb.cardWhite}>
                                <h3>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h3>
                                <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира,</p>
                                <div className={bb.displayy}>
                                    <img src={eye} alt="" />
                                    <h3>3833</h3>
                                    <p>22 мая 2022</p>
                                </div>
                            </div>

                        </div>
                    </Link>
                    <Link to={'/blog_detal'}>
                        <div className={bb.card}>

                            <img className={bb.image} src={frameRed} alt="" />

                            <div className={bb.cardWhite}>
                                <h3>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h3>
                                <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира,</p>
                                <div className={bb.displayy}>
                                    <img src={eye} alt="" />
                                    <h3>3833</h3>
                                    <p>22 мая 2022</p>
                                </div>
                            </div>

                        </div>
                    </Link>
                    <Link to={'/blog_detal'}>
                        <div className={bb.card}>

                            <img className={bb.image} src={frameRed} alt="" />

                            <div className={bb.cardWhite}>
                                <h3>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h3>
                                <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира,</p>
                                <div className={bb.displayy}>
                                    <img src={eye} alt="" />
                                    <h3>3833</h3>
                                    <p>22 мая 2022</p>
                                </div>
                            </div>

                        </div>
                    </Link>
                    <Link to={'/blog_detal'}>
                        <div className={bb.card}>

                            <img className={bb.image} src={frameRed} alt="" />

                            <div className={bb.cardWhite}>
                                <h3>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h3>
                                <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира,</p>
                                <div className={bb.displayy}>
                                    <img src={eye} alt="" />
                                    <h3>3833</h3>
                                    <p>22 мая 2022</p>
                                </div>
                            </div>

                        </div>
                    </Link>
                    <Link to={'/blog_detal'}>
                        <div className={bb.card}>

                            <img className={bb.image} src={frameRed} alt="" />

                            <div className={bb.cardWhite}>
                                <h3>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h3>
                                <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира,</p>
                                <div className={bb.displayy}>
                                    <img src={eye} alt="" />
                                    <h3>3833</h3>
                                    <p>22 мая 2022</p>
                                </div>
                            </div>

                        </div>
                    </Link>
                    <Link to={'/blog_detal'}>
                        <div className={bb.card}>

                            <img className={bb.image} src={frameRed} alt="" />

                            <div className={bb.cardWhite}>
                                <h3>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h3>
                                <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира,</p>
                                <div className={bb.displayy}>
                                    <img src={eye} alt="" />
                                    <h3>3833</h3>
                                    <p>22 мая 2022</p>
                                </div>
                            </div>

                        </div>
                    </Link>
                    <Link to={'/blog_detal'}>
                        <div className={bb.card}>

                            <img className={bb.image} src={frameRed} alt="" />

                            <div className={bb.cardWhite}>
                                <h3>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h3>
                                <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира,</p>
                                <div className={bb.displayy}>
                                    <img src={eye} alt="" />
                                    <h3>3833</h3>
                                    <p>22 мая 2022</p>
                                </div>
                            </div>

                        </div>
                    </Link>
                    <Link to={'/blog_detal'}>
                        <div className={bb.card}>

                            <img className={bb.image} src={frameRed} alt="" />

                            <div className={bb.cardWhite}>
                                <h3>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h3>
                                <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира,</p>
                                <div className={bb.displayy}>
                                    <img src={eye} alt="" />
                                    <h3>3833</h3>
                                    <p>22 мая 2022</p>
                                </div>
                            </div>

                        </div>
                    </Link>
                    <Link to={'/blog_detal'}>
                        <div className={bb.card}>

                            <img className={bb.image} src={frameRed} alt="" />

                            <div className={bb.cardWhite}>
                                <h3>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h3>
                                <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира,</p>
                                <div className={bb.displayy}>
                                    <img src={eye} alt="" />
                                    <h3>3833</h3>
                                    <p>22 мая 2022</p>
                                </div>
                            </div>

                        </div>
                    </Link>
                    <Link to={'/blog_detal'}>
                        <div className={bb.card}>

                            <img className={bb.image} src={frameRed} alt="" />

                            <div className={bb.cardWhite}>
                                <h3>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h3>
                                <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира,</p>
                                <div className={bb.displayy}>
                                    <img src={eye} alt="" />
                                    <h3>3833</h3>
                                    <p>22 мая 2022</p>
                                </div>
                            </div>

                        </div>
                    </Link>
                    <Link to={'/blog_detal'}>
                        <div className={bb.card}>

                            <img className={bb.image} src={frameRed} alt="" />

                            <div className={bb.cardWhite}>
                                <h3>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h3>
                                <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира,</p>
                                <div className={bb.displayy}>
                                    <img src={eye} alt="" />
                                    <h3>3833</h3>
                                    <p>22 мая 2022</p>
                                </div>
                            </div>

                        </div>
                    </Link>
                </div>

                <div className={bb.pag}>
                    <Pagination count={5} color="secondary" />

                </div>


            </div>
        </div >
    );
};

export default Blog;