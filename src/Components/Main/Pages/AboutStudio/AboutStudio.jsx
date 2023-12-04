import React from 'react';
import s from './AboutStudio.module.css'
import homeIcon from '../../../../Assets/Janyl/home.png'
import flowerWall from '../../../../Assets/Janyl/flower_wall.png'
import flamingo from '../../../../Assets/Janyl/flamingo.png'
import maaan from '../../../../Assets/Janyl/maaan.png'
import drawer from '../../../../Assets/Janyl/drawer.png'
import mountain from '../../../../Assets/Janyl/mountain.png'
import play_button from '../../../../Assets/Janyl/play_button.png'
import chameleon from '../../../../Assets/Janyl/chameleon.png'
import auditory from '../../../../Assets/Janyl/auditory.png'
import speaker from '../../../../Assets/Janyl/speaker.png'
import animals from '../../../../Assets/Janyl/animals.png'
import greyVector from '../../../../Assets/Janyl/greyVector.png'
import orangeVector from '../../../../Assets/Janyl/orangeVector.png'

const AboutStudio = () => {
    return (
        <div className={s.bg}>
            <section className={s.aboutStudio}>
                <div className={s.container}>
                    <div className={s.titleBlock}>
                        <div className={s.titleTopLine}>
                            <img src={homeIcon} alt="homeIcon" />
                            <p>/</p>
                            <p>О студии</p>
                        </div>
                        <h1 className={s.title}>О студии</h1>
                        <div className={s.description}>
                            <p>
                                Используем различные технологии нанесения изображений.
                                В нашем арсенале немецкое оборудование, Итальянские технологии
                                холодного трансфера и другие бесшовные покрытия.
                            </p>
                        </div>
                    </div>

                    <div className={s.createSweetWalls}>
                        <img src={flowerWall} alt={s.flowerWall} />
                        <div className={s.textBlock}>
                            <h2 className={s.subtitle}>Создаем красивые стены</h2>
                            <p>
                                Но базовый вектор развития влечет за собой процесс внедрения и модернизации
                                соответствующих условий активизации. В целом, конечно, сплочённость команды
                                профессионалов требует определения и уточнения поставленных обществом задач.
                            </p>
                            <p>
                                Разнообразный и богатый опыт говорит нам, что внедрение современных методик
                                представляет собой интересный эксперимент проверки кластеризации усилий.
                                Предварительные выводы неутешительны: базовый вектор развития создаёт
                                предпосылки для дальнейших направлений развития. Не следует, однако, забывать,
                                что граница обучения кадров прекрасно подходит для реализации своевременного
                                выполнения сверхзадачи. Разнообразный и богатый опыт говорит нам, что высокое
                                качество позиционных исследований, а также свежий взгляд на привычные вещи —
                                безусловно открывает новые горизонты для позиций, занимаемых участниками
                                в отношении поставленных задач. Принимая во внимание показатели успешности,
                                реализация намеченных плановых заданий в значительной степени обусловливает
                                важность анализа существующих паттернов поведения.
                            </p>
                        </div>
                    </div>

                    <div className={s.cardsBlock}>
                        <div className={s.card}>
                            <img src={flamingo} alt="flamingo" />
                            <div className={s.cardDescription}>
                                <h3 className={s.cardSubtitle}>Создаем красивые стены</h3>
                                <p>
                                    Используем различные технологии нанесения изображений.
                                    В нашем арсенале немецкое оборудование,
                                    Итальянские технологии холодного трансфера и
                                    другие бесшовные покрытия.
                                </p>
                            </div>
                        </div>
                        <div className={s.card}>
                            <img src={maaan} alt="maaan" />
                            <div className={s.cardDescription}>
                                <h3 className={s.cardSubtitle}>Можно нанести любое изображение</h3>
                                <p>
                                    В зависимости от выбранной технологии
                                    разрешение печати нанесённого изображения
                                    может составлять до 1440 dpi
                                </p>
                            </div>
                        </div>
                        <div className={s.card}>
                            <img src={drawer} alt="drawer" />
                            <div className={s.cardDescription}>
                                <h3 className={s.cardSubtitle}>Ваши стены - наш мольберт</h3>
                                <p>
                                    Наши дизайнеры помогут с выбором качественного
                                    изображения либо создадут для вас индивидуальный
                                    проект с учётом ваших пожеланий.
                                </p>
                            </div>
                        </div>
                        <div className={s.card}>
                            <img src={mountain} alt="mountain" />
                            <div className={s.cardDescription}>
                                <h3 className={s.cardSubtitle}>Обновить стены без ремонта</h3>
                                <p>
                                    С помощью опыта нашей команды
                                    преобразить любые помещения не составит
                                    труда вне зависимости от масштаба или сложности задачи.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={s.infoBlock}>
                        <div className={s.textBlock}>
                            <h2 className={s.subtitle}>Мы используем разные техники оформления</h2>
                            <p>
                                Разнообразный и богатый опыт говорит нам, что внедрение современных
                                методик представляет собой интересный эксперимент проверки
                                кластеризации усилий. Предварительные выводы неутешительны:
                                базовый вектор развития создаёт предпосылки для дальнейших
                                направлений развития. Не следует, однако, забывать, что
                                граница обучения кадров прекрасно подходит для реализации
                                своевременного выполнения сверхзадачи. Разнообразный и богатый
                                опыт говорит нам, что высокое качество позиционных исследований,
                                а также свежий взгляд на привычные вещи — безусловно открывает
                                новые горизонты для позиций, занимаемых участниками в отношении
                                поставленных задач.
                            </p>
                        </div>

                        <div className={s.videoCard}>
                            <img className='play_button' src={play_button} alt="play_button" />
                        </div>
                    </div>

                    <div className={s.infoBlock}>
                        <div className={s.images}>
                            <img src={chameleon} alt="chameleon" />
                        </div>
                        <div className={s.textBlock}>
                            <h2 className={s.subtitle}>Дизайнерские обои для дома и бизнеса</h2>
                            <p>
                                Разнообразный и богатый опыт говорит нам, что внедрение
                                современных методик представляет собой интересный эксперимент
                                проверки кластеризации усилий. Предварительные выводы неутешительны:
                                базовый вектор развития создаёт предпосылки для дальнейших
                                направлений развития. Не следует, однако, забывать, что граница
                                обучения кадров прекрасно подходит для реализации своевременного
                                выполнения сверхзадачи. Разнообразный и богатый опыт говорит нам,
                                что высокое качество позиционных исследований, а также свежий
                                взгляд на привычные вещи — безусловно открывает новые горизонты
                                для позиций, занимаемых участниками в отношении поставленных задач.
                            </p>
                        </div>
                    </div>

                    <div className={s.ourActivity}>
                        <div className={s.textBlock}>
                            <h2 className={s.subtitle}>Наша активность</h2>
                            <p>
                                Наша команда принимает активное
                                участие в бизнес-мероприятиях, внося вклад
                                в развитие отрасли вертикальной печати в России
                            </p>
                        </div>

                        <div className={s.images}>
                            <img src={auditory} alt="auditory" />
                            <img src={speaker} alt="speaker" />
                        </div>
                    </div>

                    <div className={s.application}>
                        <div className={s.details}>
                            <img className={s.greyVector} src={greyVector} alt="greyVector" />
                            <img className={s.orangeVector} src={orangeVector} alt="orangeVector" />
                            <img className={s.animals} src={animals} alt="animals" />
                        </div>

                        <div className={s.textBlock}>
                            <h2 className={s.subtitle}>Оставьте заявку</h2>
                            <p>
                                Оставьте заявку, наш менеджер свяжется с Вами
                                в ближайшее время и ответит на все интересующие вопросы.
                            </p>

                            <div className={s.inputs}>
                                <div className={s.nameInput}>
                                    <h4>Ваше имя:</h4>
                                    <input type="text" id="nameInputField" placeholder='your name' />
                                </div>

                                <div className={s.numberInput}>
                                    <h4>Номер телефона:</h4>
                                    <input type='text' id="numberInputField" placeholder='+7 (___) ___-__-__' />
                                </div>
                            </div>

                            <div className={s.sendReq}>
                                <button className={s.reqBtn}>Отправить заявку</button>
                                <p>
                                    Нажимая «отправить», я даю согласие
                                    на обработку персональных данных
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutStudio;