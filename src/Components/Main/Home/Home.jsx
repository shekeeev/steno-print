import React from 'react';
import o from './Home.module.css'
import imageNain from '../../../Assets/Images/image 9.png'
import imageTen from '../../../Assets/Images/image 10.png'
import imageEleven from '../../../Assets/Images/image 11.png'
import arrowBottom from '../../../Assets/Images/arrowBottom.svg'
import three from '../../../Assets/Images/three.png'
import imageKit from '../../../Assets/Images/imageKit (2).png'
import imageDog from '../../../Assets/Images/imageDog.png'
import maria from '../../../Assets/Images/maria.png'
import m from '../../../Assets/Images/m.png'
import frame from '../../../Assets/Images/Frame 235.png'
import rec from '../../../Assets/Images/Rectangle 1.png'
import white from '../../../Assets/Images/white.png'
import offer from '../../../Assets/Images/offer.png'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className={o.home}>
            <div className={o.bg_fone}>
                <div className={o.container}>
                    <div className={o.bg_fone_title}>
                        <h1>Художественное оформление вертикальных поверхностей</h1>
                        <p>Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
                        <button>Узнать подробнее</button>
                    </div>
                </div>
            </div>


            <section className={o.container}>
                <div className={o.threeCard}>
                    <Link to={'/disain_oboi'}>
                        <div className={o.threeCardColumn}>
                            <img src={imageNain} alt="" />
                            <div >
                                <h4>Дизайнерские обои</h4>
                                <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены.</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/disain_oboi'}>
                        <div className={o.threeCardColumn}>
                            <img src={imageTen} alt="" />
                            <div >
                                <h4>Виниловые обои</h4>
                                <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены.</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/disain_oboi'}>
                        <div className={o.threeCardColumn}>
                            <img src={imageEleven} alt="" />
                            <div >
                                <h4>Фирменные обои</h4>
                                <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены.</p>
                            </div>
                        </div>
                    </Link>

                </div>
                <div className={o.seo}>
                    <p className={o.seoText}>SEO text</p>

                    <div className={o.seoColumn}>
                        <p className={o.seoColumnP}>Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для направлений развития.</p>
                        <div className={o.arrowDiv}>
                            <p>Показать больше</p>
                            <img src={arrowBottom} alt="" />
                        </div>

                    </div>

                </div>
            </section>




            <section className={o.fourCard}>
                <div className={o.container}>
                    <div className={o.title}>
                        <h4>Подборки обоев</h4>
                        <p>С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.</p>
                    </div>
                    <Link to={'/disain_oboi'}>
                        <div className={o.fourCardColumn}>

                            <div className={o.card}>
                                <img src={three} alt="" />
                                <h4>Дизайнерские обои</h4>
                                <p>Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
                            </div>
                            <div className={o.card}>
                                <img src={three} alt="" />
                                <h4>Дизайнерские обои</h4>
                                <p>Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
                            </div>
                            <div className={o.card}>
                                <img src={three} alt="" />
                                <h4>Дизайнерские обои</h4>
                                <p>Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
                            </div>
                            <div className={o.card}>
                                <img src={three} alt="" />
                                <h4>Дизайнерские обои</h4>
                                <p>Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
                            </div>
                        </div>
                    </Link>

                </div>

            </section>

            <section className={o.fourNew}>
                <div className={o.container}>
                    <h3>Новинки</h3>
                    <Link to={'/catalog'}>
                        <div className={o.columnNew}>
                            <div>
                                <div className={o.oneNew}>
                                    <div className={o.twentyFive}><p>-25%</p></div>
                                    <div className={o.populyar}><p>Популярное</p></div>
                                    <div className={o.new}><p>Новинка</p></div>
                                </div>
                                <div className={o.oneNewBottom}>
                                    <div className={o.florasion}>
                                        <h4>Floraison</h4>
                                        <p>от 2 552 ₽ / м2</p>
                                    </div>
                                    <div className={o.artikul}>
                                        <h4>Артикул: 11039</h4>
                                        <p>от 3 452 ₽ / м2 </p>
                                    </div>


                                </div>
                            </div>
                            <div>
                                <div className={o.twoNew}>
                                    {/* <div className={o.twentyFive}><p>-25%</p></div> */}
                                    <div className={o.populyar}><p>Популярное</p></div>
                                    <div className={o.new}><p>Новинка</p></div>
                                </div>
                                <div className={o.oneNewBottom}>
                                    <div className={o.florasion}>
                                        <h4>Floraison</h4>
                                        <p>от 2 552 ₽ / м2</p>
                                    </div>
                                    <div className={o.artikul}>
                                        <h4>Артикул: 11039</h4>
                                        <p>от 3 452 ₽ / м2 </p>
                                    </div>


                                </div>
                            </div>
                            <div>
                                <div className={o.threeNew}>
                                    {/* <div className={o.twentyFive}><p>-25%</p></div>
                                <div className={o.populyar}><p>Популярное</p></div>
                                <div className={o.new}><p>Новинка</p></div> */}
                                </div>
                                <div className={o.oneNewBottom}>
                                    <div className={o.florasion}>
                                        <h4>Floraison</h4>
                                        <p>от 2 552 ₽ / м2</p>
                                    </div>
                                    <div className={o.artikul}>
                                        <h4>Артикул: 11039</h4>
                                        <p>от 3 452 ₽ / м2 </p>
                                    </div>


                                </div>
                            </div>
                            <div>
                                <div className={o.fourrNew}>
                                    <div className={o.twentyFive}><p>-25%</p></div>
                                    {/* <div className={o.populyar}><p>Популярное</p></div> */}
                                    <div className={o.new}><p>Новинка</p></div>
                                </div>
                                <div className={o.oneNewBottom}>
                                    <div className={o.florasion}>
                                        <h4>Floraison</h4>
                                        <p>от 2 552 ₽ / м2</p>
                                    </div>
                                    <div className={o.artikul}>
                                        <h4>Артикул: 11039</h4>
                                        <p>от 3 452 ₽ / м2 </p>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
            <section className={o.hack}>
                <div className={o.container}>
                    <div className={o.bg}>
                        <input className={o.inp} type="text" placeholder='Ваше имя' />
                        <input className={o.firstInp} type={'text'} placeholder='+(996)' />
                    </div>
                </div>
            </section>

            <section className={o.container}>
                <div className={o.collectionP}>
                    <h4>
                        Авторские коллекции
                    </h4>
                    <p>
                        С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.
                    </p>
                </div>
                <div className={o.columnKit}>
                    <div className={o.kit}>
                        <img src={imageKit} alt="kit" />
                        <div className={o.kitDiv}>
                            <h4>Жилые помещения</h4>
                            <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены.</p>
                        </div>
                    </div>
                    <div className={o.kit}>
                        <img src={imageDog} alt="kit" />
                        <div className={o.kitDiv}>
                            <h4>Офисы, рестораны, кафе</h4>
                            <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={o.container}>
                <div className={o.reviews}>
                    <h4>
                        Отзывы
                    </h4>
                    <p>
                        С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.
                    </p>
                </div>

                <div className={o.display}>
                    <div className={o.fourFlex}>
                        <div>
                            <img src={maria} alt="" />
                            <div className={o.g}>
                                <img src={m} alt="" />
                                <div className={o.maria}>
                                    <h4>Мария</h4>
                                    <p>г. Москва</p>
                                </div>
                            </div>

                            <div className={o.oneP}>
                                <p>С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.</p>
                            </div>

                        </div>
                    </div>

                    <div className={o.fourFlex}>
                        <div>
                            <img src={maria} alt="" />
                            <div className={o.g}>
                                <img src={m} alt="" />
                                <div className={o.maria}>
                                    <h4>Мария</h4>
                                    <p>г. Москва</p>
                                </div>
                            </div>

                            <div className={o.oneP}>
                                <p>С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.</p>
                            </div>

                        </div>
                    </div>

                    <div className={o.fourFlex}>
                        <div>
                            <img src={maria} alt="" />
                            <div className={o.g}>
                                <img src={m} alt="" />
                                <div className={o.maria}>
                                    <h4>Мария</h4>
                                    <p>г. Москва</p>
                                </div>
                            </div>

                            <div className={o.oneP}>
                                <p>С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.</p>
                            </div>

                        </div>
                    </div>

                    <div className={o.fourFlex}>
                        <div>
                            <img src={maria} alt="" />
                            <div className={o.g}>
                                <img src={m} alt="" />
                                <div className={o.maria}>
                                    <h4>Мария</h4>
                                    <p>г. Москва</p>
                                </div>
                            </div>

                            <div className={o.oneP}>
                                <p>С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className={o.container}>
                <div className={o.displayFlex}>
                    <div className={o.imageTwentyNain}>
                        <img src={frame} alt="" />
                    </div>
                    <div className={o.tehnic}>
                        <h4>
                            Мы используем разные техники оформления
                        </h4>
                        <p>
                            Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует, однако, забывать, что граница обучения кадров прекрасно подходит для реализации своевременного выполнения сверхзадачи. Разнообразный и богатый опыт говорит нам, что высокое качество позиционных исследований, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для позиций, занимаемых участниками в отношении поставленных задач.
                        </p>
                    </div>
                </div>
            </section>

            <section className={o.container}>
                <div className={o.material}>
                    <h4>Материалы</h4>
                    <p>С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.</p>
                </div>

                <div className={o.rulon}>
                    <div className={o.rulonP}>
                        <p>По рулонам</p>
                        <img src={rec} alt="" />
                    </div>

                    <div className={o.rulonPP}>
                        <p>Бесшовные</p>
                        <img src={rec} alt="" />
                    </div>
                </div>
                <div className={o.whiteColumn}>
                    <div className={o.whiteFone}>
                        <img src={white} alt="" />
                        <div className={o.scandi}>
                            <h4>
                                Scandi
                            </h4>
                            <p>
                                С помощью опыта нашей команды преобразить любые помещения не составит труда.
                            </p>
                        </div>
                    </div>
                    <div className={o.whiteFone}>
                        <img src={white} alt="" />
                        <div className={o.scandi}>
                            <h4>
                                Scandi
                            </h4>
                            <p>
                                С помощью опыта нашей команды преобразить любые помещения не составит труда.
                            </p>
                        </div>
                    </div>
                    <div className={o.whiteFone}>
                        <img src={white} alt="" />
                        <div className={o.scandi}>
                            <h4>
                                Scandi
                            </h4>
                            <p>
                                С помощью опыта нашей команды преобразить любые помещения не составит труда.
                            </p>
                        </div>
                    </div>
                    <div className={o.whiteFone}>
                        <img src={white} alt="" />
                        <div className={o.scandi}>
                            <h4>
                                Scandi
                            </h4>
                            <p>
                                С помощью опыта нашей команды преобразить любые помещения не составит труда.
                            </p>
                        </div>
                    </div>
                    <div className={o.whiteFone}>
                        <img src={white} alt="" />
                        <div className={o.scandi}>
                            <h4>
                                Scandi
                            </h4>
                            <p>
                                С помощью опыта нашей команды преобразить любые помещения не составит труда.
                            </p>
                        </div>
                    </div>
                    <div className={o.whiteFone}>
                        <img src={white} alt="" />
                        <div className={o.scandi}>
                            <h4>
                                Scandi
                            </h4>
                            <p>
                                С помощью опыта нашей команды преобразить любые помещения не составит труда.
                            </p>
                        </div>
                    </div>
                </div>

            </section>


            <section className={o.container}>
                <div className={o.marginBottom}>
                    <img src={offer} alt="" />
                    {/* <input className={o.offerInp} type="text" placeholder='Ваше имя' />
                    <input className={o.offerInpSecond} type={'text'} placeholder='+(996)' /> */}
                </div>
            </section>
        </div>
    );
};

export default Home;