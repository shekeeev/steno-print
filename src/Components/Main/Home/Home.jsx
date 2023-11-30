import React from 'react';
import b from './Home.module.css'
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
const Home = () => {
    return (
        <div className={b.home}>
            <div className={b.bg_fone}>
                <div className={b.container}>
                    <div className={b.bg_fone_title}>
                        <h1>Художественное оформление вертикальных поверхностей</h1>
                        <p>Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
                        <button>Узнать подробнее</button>
                    </div>
                </div>
            </div>


            <section className={b.container}>
                <div className={b.threeCard}>
                    <div className={b.threeCardColumn}>
                        <img src={imageNain} alt="" />
                        <div >
                            <h4>Дизайнерские обои</h4>
                            <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены.</p>
                        </div>
                    </div>
                    <div className={b.threeCardColumn}>
                        <img src={imageTen} alt="" />
                        <div >
                            <h4>Виниловые обои</h4>
                            <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены.</p>
                        </div>
                    </div>
                    <div className={b.threeCardColumn}>
                        <img src={imageEleven} alt="" />
                        <div >
                            <h4>Фирменные обои</h4>
                            <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены.</p>
                        </div>
                    </div>
                </div>
                <div className={b.seo}>
                    <p className={b.seoText}>SEO text</p>

                    <div className={b.seoColumn}>
                        <p className={b.seoColumnP}>Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для направлений развития.</p>
                        <div className={b.arrowDiv}>
                            <p>Показать больше</p>
                            <img src={arrowBottom} alt="" />
                        </div>

                    </div>

                </div>
            </section>




            <section className={b.fourCard}>
                <div className={b.container}>
                    <div className={b.title}>
                        <h4>Подборки обоев</h4>
                        <p>С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.</p>
                    </div>
                    <div className={b.fourCardColumn}>
                        <div className={b.card}>
                            <img src={three} alt="" />
                            <h4>Дизайнерские обои</h4>
                            <p>Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
                        </div>
                        <div className={b.card}>
                            <img src={three} alt="" />
                            <h4>Дизайнерские обои</h4>
                            <p>Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
                        </div>
                        <div className={b.card}>
                            <img src={three} alt="" />
                            <h4>Дизайнерские обои</h4>
                            <p>Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
                        </div>
                        <div className={b.card}>
                            <img src={three} alt="" />
                            <h4>Дизайнерские обои</h4>
                            <p>Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
                        </div>
                    </div>
                </div>

            </section>

            <section className={b.fourNew}>
                <div className={b.container}>
                    <h3>Новинки</h3>
                    <div className={b.columnNew}>
                        <div>
                            <div className={b.oneNew}>
                                <div className={b.twentyFive}><p>-25%</p></div>
                                <div className={b.populyar}><p>Популярное</p></div>
                                <div className={b.new}><p>Новинка</p></div>
                            </div>
                            <div className={b.oneNewBottom}>
                                <div className={b.florasion}>
                                    <h4>Floraison</h4>
                                    <p>от 2 552 ₽ / м2</p>
                                </div>
                                <div className={b.artikul}>
                                    <h4>Артикул: 11039</h4>
                                    <p>от 3 452 ₽ / м2 </p>
                                </div>


                            </div>
                        </div>
                        <div>
                            <div className={b.twoNew}>
                                {/* <div className={b.twentyFive}><p>-25%</p></div> */}
                                <div className={b.populyar}><p>Популярное</p></div>
                                <div className={b.new}><p>Новинка</p></div>
                            </div>
                            <div className={b.oneNewBottom}>
                                <div className={b.florasion}>
                                    <h4>Floraison</h4>
                                    <p>от 2 552 ₽ / м2</p>
                                </div>
                                <div className={b.artikul}>
                                    <h4>Артикул: 11039</h4>
                                    <p>от 3 452 ₽ / м2 </p>
                                </div>


                            </div>
                        </div>
                        <div>
                            <div className={b.threeNew}>
                                {/* <div className={b.twentyFive}><p>-25%</p></div>
                                <div className={b.populyar}><p>Популярное</p></div>
                                <div className={b.new}><p>Новинка</p></div> */}
                            </div>
                            <div className={b.oneNewBottom}>
                                <div className={b.florasion}>
                                    <h4>Floraison</h4>
                                    <p>от 2 552 ₽ / м2</p>
                                </div>
                                <div className={b.artikul}>
                                    <h4>Артикул: 11039</h4>
                                    <p>от 3 452 ₽ / м2 </p>
                                </div>


                            </div>
                        </div>
                        <div>
                            <div className={b.fourrNew}>
                                <div className={b.twentyFive}><p>-25%</p></div>
                                {/* <div className={b.populyar}><p>Популярное</p></div> */}
                                <div className={b.new}><p>Новинка</p></div>
                            </div>
                            <div className={b.oneNewBottom}>
                                <div className={b.florasion}>
                                    <h4>Floraison</h4>
                                    <p>от 2 552 ₽ / м2</p>
                                </div>
                                <div className={b.artikul}>
                                    <h4>Артикул: 11039</h4>
                                    <p>от 3 452 ₽ / м2 </p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={b.hack}>
                <div className={b.container}>
                    <div className={b.bg}>
                        <input className={b.inp} type="text" placeholder='Ваше имя' />
                        <input className={b.firstInp} type={'text'} placeholder='+(996)' />
                    </div>
                </div>
            </section>

            <section className={b.container}>
                <div className={b.collectionP}>
                    <h4>
                        Авторские коллекции
                    </h4>
                    <p>
                        С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.
                    </p>
                </div>
                <div className={b.columnKit}>
                    <div className={b.kit}>
                        <img src={imageKit} alt="kit" />
                        <div className={b.kitDiv}>
                            <h4>Жилые помещения</h4>
                            <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены.</p>
                        </div>
                    </div>
                    <div className={b.kit}>
                        <img src={imageDog} alt="kit" />
                        <div className={b.kitDiv}>
                            <h4>Офисы, рестораны, кафе</h4>
                            <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={b.container}>
                <div className={b.reviews}>
                    <h4>
                        Отзывы
                    </h4>
                    <p>
                        С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.
                    </p>
                </div>

                <div className={b.display}>
                    <div className={b.fourFlex}>
                        <div>
                            <img src={maria} alt="" />
                            <div className={b.g}>
                                <img src={m} alt="" />
                                <div className={b.maria}>
                                    <h4>Мария</h4>
                                    <p>г. Москва</p>
                                </div>
                            </div>

                            <div className={b.oneP}>
                                <p>С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.</p>
                            </div>

                        </div>
                    </div>

                    <div className={b.fourFlex}>
                        <div>
                            <img src={maria} alt="" />
                            <div className={b.g}>
                                <img src={m} alt="" />
                                <div className={b.maria}>
                                    <h4>Мария</h4>
                                    <p>г. Москва</p>
                                </div>
                            </div>

                            <div className={b.oneP}>
                                <p>С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.</p>
                            </div>

                        </div>
                    </div>

                    <div className={b.fourFlex}>
                        <div>
                            <img src={maria} alt="" />
                            <div className={b.g}>
                                <img src={m} alt="" />
                                <div className={b.maria}>
                                    <h4>Мария</h4>
                                    <p>г. Москва</p>
                                </div>
                            </div>

                            <div className={b.oneP}>
                                <p>С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.</p>
                            </div>

                        </div>
                    </div>

                    <div className={b.fourFlex}>
                        <div>
                            <img src={maria} alt="" />
                            <div className={b.g}>
                                <img src={m} alt="" />
                                <div className={b.maria}>
                                    <h4>Мария</h4>
                                    <p>г. Москва</p>
                                </div>
                            </div>

                            <div className={b.oneP}>
                                <p>С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className={b.container}>
                <div className={b.displayFlex}>
                    <div className={b.imageTwentyNain}>
                        <img src={frame} alt="" />
                    </div>
                    <div className={b.tehnic}>
                        <h4>
                            Мы используем разные техники оформления
                        </h4>
                        <p>
                            Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует, однако, забывать, что граница обучения кадров прекрасно подходит для реализации своевременного выполнения сверхзадачи. Разнообразный и богатый опыт говорит нам, что высокое качество позиционных исследований, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для позиций, занимаемых участниками в отношении поставленных задач.
                        </p>
                    </div>
                </div>
            </section>

            <section className={b.container}>
                <div className={b.material}>
                    <h4>Материалы</h4>
                    <p>С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.</p>
                </div>

                <div className={b.rulon}>
                    <div className={b.rulonP}>
                        <p>По рулонам</p>
                        <img src={rec} alt="" />
                    </div>

                    <div className={b.rulonPP}>
                        <p>Бесшовные</p>
                        <img src={rec} alt="" />
                    </div>
                </div>
                <div className={b.whiteColumn}>
                    <div className={b.whiteFone}>
                        <img src={white} alt="" />
                        <div className={b.scandi}>
                            <h4>
                                Scandi
                            </h4>
                            <p>
                                С помощью опыта нашей команды преобразить любые помещения не составит труда.
                            </p>
                        </div>
                    </div>
                    <div className={b.whiteFone}>
                        <img src={white} alt="" />
                        <div className={b.scandi}>
                            <h4>
                                Scandi
                            </h4>
                            <p>
                                С помощью опыта нашей команды преобразить любые помещения не составит труда.
                            </p>
                        </div>
                    </div>
                    <div className={b.whiteFone}>
                        <img src={white} alt="" />
                        <div className={b.scandi}>
                            <h4>
                                Scandi
                            </h4>
                            <p>
                                С помощью опыта нашей команды преобразить любые помещения не составит труда.
                            </p>
                        </div>
                    </div>
                    <div className={b.whiteFone}>
                        <img src={white} alt="" />
                        <div className={b.scandi}>
                            <h4>
                                Scandi
                            </h4>
                            <p>
                                С помощью опыта нашей команды преобразить любые помещения не составит труда.
                            </p>
                        </div>
                    </div>
                    <div className={b.whiteFone}>
                        <img src={white} alt="" />
                        <div className={b.scandi}>
                            <h4>
                                Scandi
                            </h4>
                            <p>
                                С помощью опыта нашей команды преобразить любые помещения не составит труда.
                            </p>
                        </div>
                    </div>
                    <div className={b.whiteFone}>
                        <img src={white} alt="" />
                        <div className={b.scandi}>
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


            <section className={b.container}>
                <div className={b.marginBottom}>
                    <img src={offer} alt="" />
                    {/* <input className={b.offerInp} type="text" placeholder='Ваше имя' />
                    <input className={b.offerInpSecond} type={'text'} placeholder='+(996)' /> */}
                </div>
            </section>
        </div>
    );
};

export default Home;