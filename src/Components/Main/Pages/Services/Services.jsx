import React from 'react';
import a from './Services.module.css'
import homeImg from '../../../../Assets/Aisanat/home.png'
import kitchenImg from '../../../../Assets/Aisanat/kitchen.png'
import officeImg from '../../../../Assets/Aisanat/office.png'
import pictureImg from '../../../../Assets/Aisanat/picture.png'
import fotoImg from '../../../../Assets/Aisanat/foto.png'
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <section>
            <div className={a.services_fone}>
                <div className={a.container}>
                    <div className={a.services_box}>
                        <div className={a.services_logo}>
                            <img src={homeImg} alt="logo" />
                            <h4>/</h4>
                            <p> Услуги</p>
                        </div>
                        <h2>Услуги</h2>
                        <p>Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
                    </div>
                    <div className={a.services_block_item}>
                        <div className={a.kitchen_block}>
                            <div>
                                <img src={kitchenImg} alt="kitchen" />
                            </div>
                            <div className={a.kitchen_title}>
                                <h3>Создание уникального дизайна в квартире, доме, офисе</h3>
                                <p>Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует, однако, забывать, что граница обучения кадров прекрасно подходит для реализации своевременного выполнения сверхзадачи.</p>
                                <p>Узнать подробнее</p>
                            </div>
                        </div>
                        <div className={a.office_block}>
                            <div className={a.office_title}>
                                <h3>Оформление офисов и коммерческих помещений в фирменном стиле</h3>
                                <p>Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует, однако, забывать, что граница обучения кадров прекрасно подходит для реализации своевременного выполнения сверхзадачи.</p>
                                <p className={a.red}>Узнать подробнее</p>
                            </div>
                            <div >
                                <img src={officeImg} alt="office" />
                            </div>
                        </div>
                        <div className={a.picture_block}>
                            <div>
                                <img src={pictureImg} alt="picture" />
                            </div>
                            <div className={a.picture_title}>
                                <h3>Функциональный дизайн. Нанесение указателей, вывесок</h3>
                                <p>Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует, однако, забывать, что граница обучения кадров прекрасно подходит для реализации своевременного выполнения сверхзадачи.</p>
                                <Link to={'/services_detal'}>
                                    <p className={a.red}>Узнать подробнее</p>
                                </Link>
                            </div>
                        </div>
                        <div className={a.foto_block}>
                            <div className={a.foto_title}>
                                <h3>Печать фотографий и коллажей</h3>
                                <p>Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует, однако, забывать, что граница обучения кадров прекрасно подходит для реализации своевременного выполнения сверхзадачи.</p>
                                <p className={a.red}>Узнать подробнее</p>
                            </div >
                            <div>
                                <img src={fotoImg} alt="foto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Services;

