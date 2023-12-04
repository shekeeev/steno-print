import React from 'react';
import cc from './CaralogCard.module.css'
import home from '../../../../Assets/Images/home.svg'
import imageTwelwe from '../../../../Assets/Images/imageTwelwe.png'
import imageThotin from '../../../../Assets/Images/imageThotin.png'
import imageEleven from '../../../../Assets/Images/image 11.png'
import threeImg from '../../../../Assets/Images/threeImg.png'
import gold from '../../../../Assets/Images/gold.png'
import blue from '../../../../Assets/Images/blue.png'
import arrowRed from '../../../../Assets/Images/arrowRed.svg'
import arrow from '../../../../Assets/Images/arrowBottom.svg'
import white from '../../../../Assets/Images/white.png'
const CatalogCard = () => {
    return (

        <div className={cc.body}>
            <div className={cc.container}>
                <div className={cc.home}>
                    <img src={home} alt="home" />
                    <p>/</p>
                    <p>Каталог товаров</p>
                    <p>/</p>
                    <p>Дизайнерские обои</p>
                    <p>/</p>
                    <p>Floraison</p>
                </div>

                <div className={cc.floraison}>

                    <div className={cc.imageTwelwe}>
                        <img src={imageTwelwe} alt="" />
                        <img src={imageThotin} alt="" />
                        <div className={cc.imageEleven}>
                            <img src={imageEleven} alt="" />
                        </div>
                    </div>

                    <div className={cc.floraisonP}>
                        <h1>Floraison</h1>
                        <h3>Артикул: 11039</h3>
                        <p>Но базовый вектор развития влечет за собой процесс внедрения и модернизации соответствующих условий активизации. В целом, конечно, сплочённость команды профессионалов требует определения и уточнения поставленных обществом задач.
                        </p>
                        <h2>Цвет:</h2>
                        <div className={cc.threeImg}>
                            <img src={threeImg} alt="" />
                        </div>
                        <h2>Размер:</h2>
                        <div className={cc.inpColumn}>

                            <div>
                                <h3>Высота:</h3>
                                <input type="text" placeholder='1 метр' />
                            </div>
                            <p className={cc.x}>X</p>
                            <div>
                                <h3>Ширина:</h3>
                                <input type="text" placeholder='1 метр' />
                            </div>

                        </div>
                        <h2>Материал:</h2>
                        <h3>Бесшовные материалы:</h3>

                        <div className={cc.dispFlex}>

                            <div className={cc.firstDiv}>
                                <img src={gold} alt="" />
                                <div className={cc.firstDivColumn}>
                                    <h5>Серия R GOLD</h5>
                                    <h3>Зеркальная пленка</h3>
                                </div>
                            </div>

                            <div className={cc.firstDiv}>
                                <img src={blue} alt="" />
                                <div className={cc.firstDivColumn}>
                                    <h5>Серия R BLUE</h5>
                                    <h3>Тонирующая пленка</h3>
                                </div>
                            </div>

                        </div>
                        <h3>Шовные материалы:</h3>
                        <div className={cc.dispFlex}>

                            <div className={cc.firstDiv}>
                                <img src={gold} alt="" />
                                <div className={cc.firstDivColumn}>
                                    <h5>Серия R GOLD</h5>
                                    <h3>Зеркальная пленка</h3>
                                </div>
                            </div>

                            <div className={cc.firstDiv}>
                                <img src={blue} alt="" />
                                <div className={cc.firstDivColumn}>
                                    <h5>Серия R BLUE</h5>
                                    <h3>Тонирующая пленка</h3>
                                </div>
                            </div>

                        </div>
                        <div className={cc.arrowRed}>
                            <p className={cc.red}>Смотреть инструкцию по оклейке Зеркальной пленки</p>
                            <img src={arrowRed} alt="" />
                        </div>

                    </div>

                </div>

                <div className={cc.select}>

                    <div className={cc.firstWhite}>

                        <div className={cc.arrowRed}>
                            <h3>Заголовок</h3>
                            <img className={cc.arrowTop} src={arrow} alt="" />
                        </div>
                        <p>Но базовый вектор развития влечет за собой процесс внедрения и модернизации соответствующих условий активизации. В целом, конечно, сплочённость команды профессионалов требует определения и уточнения поставленных обществом задач.
                            <br />
                            <br />
                            <br />

                            Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует, однако, забывать, что граница обучения кадров прекрасно подходит для реализации своевременного выполнения сверхзадачи. Разнообразный и богатый опыт говорит нам, что высокое качество позиционных исследований, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для позиций, занимаемых участниками в отношении поставленных задач. Принимая во внимание показатели успешности, реализация намеченных плановых заданий в значительной степени обусловливает важность анализа существующих паттернов поведения.</p>
                    </div>

                    <div className={cc.secondWhite}>
                        <div className={cc.arrowRed}>
                            <h3>Характеристики</h3>
                            <img className={cc.arrowTopp} src={arrow} alt="" />
                        </div>
                        <div className={cc.material}>
                            <h3>Экологичность</h3>
                            <p>Все наши обои на 100% экологичны. Сертификаты: UL GREENGUARD GOLD (чернила), OEKO-TEX® Standard 100 (Материалы).</p>
                        </div>
                        <div className={cc.material}>
                            <h3>Характеристики</h3>
                            <p>Флизелин, флизелин с акриловым покрытием (шовный и бесшовный), фреска.</p>
                        </div>
                        <div className={cc.materiall}>
                            <h3>Пожаробезобасность</h3>
                            <p>Пожарный сертификат Г1 (Слабогорючие материалы).</p>
                        </div>

                    </div>

                </div>

                <div className={cc.whiteColumn}>
                    <div className={cc.whiteFone}>
                        <img src={white} alt="" />
                        <div className={cc.scandi}>
                            <h4>
                                Scandi
                            </h4>
                            <p>
                                С помощью опыта нашей команды преобразить любые помещения не составит труда.
                            </p>
                        </div>
                    </div>
                    <div className={cc.whiteFone}>
                        <img src={white} alt="" />
                        <div className={cc.scandi}>
                            <h4>
                                Scandi
                            </h4>
                            <p>
                                С помощью опыта нашей команды преобразить любые помещения не составит труда.
                            </p>
                        </div>
                    </div>
                    <div className={cc.whiteFone}>
                        <img src={white} alt="" />
                        <div className={cc.scandi}>
                            <h4>
                                Scandi
                            </h4>
                            <p>
                                С помощью опыта нашей команды преобразить любые помещения не составит труда.
                            </p>
                        </div>
                    </div>
                    <div className={cc.whiteFone}>
                        <img src={white} alt="" />
                        <div className={cc.scandi}>
                            <h4>
                                Scandi
                            </h4>
                            <p>
                                С помощью опыта нашей команды преобразить любые помещения не составит труда.
                            </p>
                        </div>
                    </div>
                    <div className={cc.whiteFone}>
                        <img src={white} alt="" />
                        <div className={cc.scandi}>
                            <h4>
                                Scandi
                            </h4>
                            <p>
                                С помощью опыта нашей команды преобразить любые помещения не составит труда.
                            </p>
                        </div>
                    </div>
                    <div className={cc.whiteFone}>
                        <img src={white} alt="" />
                        <div className={cc.scandi}>
                            <h4>
                                Scandi
                            </h4>
                            <p>
                                С помощью опыта нашей команды преобразить любые помещения не составит труда.
                            </p>
                        </div>
                    </div>
                </div>


                <section className={cc.fourNew}>
                    {/* <div className={cc.container}> */}
                    <h3>Новинки</h3>
                    <div className={cc.columnNew}>
                        <div>
                            <div className={cc.oneNew}>
                                <div className={cc.twentyFive}><p>-25%</p></div>
                                <div className={cc.populyar}><p>Популярное</p></div>
                                <div className={cc.new}><p>Новинка</p></div>
                            </div>
                            <div className={cc.oneNewBottom}>
                                <div className={cc.florasion}>
                                    <h4>Floraison</h4>
                                    <p>от 2 552 ₽ / м2</p>
                                </div>
                                <div className={cc.artikul}>
                                    <h4>Артикул: 11039</h4>
                                    <p>от 3 452 ₽ / м2 </p>
                                </div>


                            </div>
                        </div>
                        <div>
                            <div className={cc.twoNew}>
                                {/* <div className={cc.twentyFive}><p>-25%</p></div> */}
                                <div className={cc.populyar}><p>Популярное</p></div>
                                <div className={cc.new}><p>Новинка</p></div>
                            </div>
                            <div className={cc.oneNewBottom}>
                                <div className={cc.florasion}>
                                    <h4>Floraison</h4>
                                    <p>от 2 552 ₽ / м2</p>
                                </div>
                                <div className={cc.artikul}>
                                    <h4>Артикул: 11039</h4>
                                    <p>от 3 452 ₽ / м2 </p>
                                </div>


                            </div>
                        </div>
                        <div>
                            <div className={cc.threeNew}>
                                {/* <div className={cc.twentyFive}><p>-25%</p></div>
                                <div className={cc.populyar}><p>Популярное</p></div>
                                <div className={cc.new}><p>Новинка</p></div> */}
                            </div>
                            <div className={cc.oneNewBottom}>
                                <div className={cc.florasion}>
                                    <h4>Floraison</h4>
                                    <p>от 2 552 ₽ / м2</p>
                                </div>
                                <div className={cc.artikul}>
                                    <h4>Артикул: 11039</h4>
                                    <p>от 3 452 ₽ / м2 </p>
                                </div>


                            </div>
                        </div>
                        <div>
                            <div className={cc.fourrNew}>
                                <div className={cc.twentyFive}><p>-25%</p></div>
                                {/* <div className={cc.populyar}><p>Популярное</p></div> */}
                                <div className={cc.new}><p>Новинка</p></div>
                            </div>
                            <div className={cc.oneNewBottom}>
                                <div className={cc.florasion}>
                                    <h4>Floraison</h4>
                                    <p>от 2 552 ₽ / м2</p>
                                </div>
                                <div className={cc.artikul}>
                                    <h4>Артикул: 11039</h4>
                                    <p>от 3 452 ₽ / м2 </p>
                                </div>


                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </section>


            </div>
        </div>

    );
};

export default CatalogCard;