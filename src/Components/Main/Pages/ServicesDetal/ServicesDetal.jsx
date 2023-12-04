import React from 'react';
import b from './ServicesDetal.module.css'
import homeIcon from '../../../../Assets/Bayel/home.png'
import officeFone from '../../../../Assets/Bayel/office_fone.png'
import flamingo from '../../../../Assets/Bayel/flamingo.png'
import usy from '../../../../Assets/Bayel/chel_usy.png'
import roza from '../../../../Assets/Bayel/roza.png'
import mountain from '../../../../Assets/Bayel/moutain.png'
import robot from '../../../../Assets/Bayel/robot.png'
import plain from '../../../../Assets/Bayel/plain.png'
import iconOne from '../../../../Assets/Bayel/icon1.png'
import iconTwo from '../../../../Assets/Bayel/icon2.png'
import iconThre from '../../../../Assets/Bayel/icon3.png'
import iconFor from '../../../../Assets/Bayel/icon4.png'
import blueImg from '../../../../Assets/Bayel/form_blue.png'
import orangeImg from '../../../../Assets/Bayel/from_orange.png'
import yellowImg from '../../../../Assets/Bayel/form_yelow.png'
import project1 from '../../../../Assets/Bayel/project1.png'
import project2 from '../../../../Assets/Bayel/project2.png'
import project3 from '../../../../Assets/Bayel/project3.png'
import project4 from '../../../../Assets/Bayel/project4.png'
import project5 from '../../../../Assets/Bayel/project5.png'
import submit from '../../../../Assets/Bayel/submit_ yourapplication.png'

const ServicesDetal = () => {
    return (
        <div>
            <div className={b.bg_fone}>
                <div className={b.container}>
                    <div className={b.bg_fone_title}>
                        <h1>Художественное оформление вертикальных поверхностей</h1>
                        <p>Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
                        <button>Узнать подробнее</button>
                    </div>
                </div>
            </div>
            <div className={b.servicesDetal_about}>
                <div className={b.container}>
                    <div className={b.OfficeDecoration_box}>
                        <div className={b.OfficeDecoration_text}>
                            <img src={homeIcon} alt="homeIcon" />
                            <h3>/ Услуги /</h3>
                            <h3>Оформление офисов и коммерческих помещений в фирменном стиле</h3>
                        </div>
                        <h2>Оформление офисов и коммерческих помещений в фирменном стиле</h2>
                        <p>Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
                    </div>


                    <div className={b.wallpaperDreams}>
                        <img src={officeFone} alt="" />
                        <div className={b.wallpaperDreams_title}>
                            <h2>Дизайнерские обои вашей мечты</h2>
                            <p>Но базовый вектор развития влечет за собой процесс внедрения и модернизации соответствующих условий активизации. В целом, конечно, сплочённость команды профессионалов требует определения и уточнения поставленных обществом задач.
                            </p>
                            <p>Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует, однако, забывать, что граница обучения кадров прекрасно подходит для реализации своевременного выполнения сверхзадачи. Разнообразный и богатый опыт говорит нам, что высокое качество позиционных исследований, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для позиций, занимаемых участниками в отношении поставленных задач. Принимая во внимание показатели успешности, реализация намеченных плановых заданий в значительной степени обусловливает важность анализа существующих паттернов поведения.</p>
                        </div>
                    </div>



                    <div className={b.wallpaperDreams_card}>
                        <div className={b.wallpaperDreamsCard_content}>
                            <img src={flamingo} alt="flamingo" />
                            <h2>Создаем красивые стены</h2>
                            <p>Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
                        </div>

                        <div className={b.wallpaperDreamsCard_content}>
                            <img src={usy} alt="flamingo" />
                            <h2>Можно нанести любое изображение</h2>
                            <p>В зависимости от выбранной технологии разрешение печати нанесённого изображения может составлять до 1440 dpi</p>
                        </div>

                        <div className={b.wallpaperDreamsCard_content}>
                            <img src={roza} alt="flamingo" />
                            <h2>Ваши стены - наш мольберт</h2>
                            <p>В зависимости от выбранной технологии разрешение печати нанесённого изображения может составлять до 1440 dpi</p>
                        </div>
                        <div className={b.wallpaperDreamsCard_content}>
                            <img src={mountain} alt="flamingo" />
                            <h2>Обновить стены без ремонта</h2>
                            <p>С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.</p>
                        </div>
                    </div>




                    <div className={b.designTechniques}>
                        <div className={b.designTechniques_content}>
                            <h2>Мы используем разные техники оформления</h2>
                            <p>Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует, однако, забывать, что граница обучения кадров прекрасно подходит для реализации своевременного выполнения сверхзадачи. Разнообразный и богатый опыт говорит нам, что высокое качество позиционных исследований, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для позиций, занимаемых участниками в отношении поставленных задач.</p>
                        </div>
                        <img src={robot} alt="" />
                    </div>


                    <div className={b.womanChild}>
                        <img src={plain} alt="" />
                        <div className={b.womanChild_content}>
                            <h2>Индивидуальный подход к каждому клиенту</h2>
                            <p>Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует, однако, забывать, что граница обучения кадров прекрасно подходит для реализации своевременного выполнения сверхзадачи. Разнообразный и богатый опыт говорит нам, что высокое качество позиционных исследований, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для позиций, занимаемых участниками в отношении поставленных задач.</p>
                        </div>
                    </div>


                    <div className={b.about_work}>
                        <div className={b.about_work_content}>
                            <h2>Как мы работаем?</h2>
                            <p>Но базовый вектор развития влечет за собой процесс внедрения и модернизации соответствующих условий активизации.</p>
                        </div>

                        <div className={b.about_work_box}>
                            <div className={b.about_work_card}>
                                <img src={iconOne} alt="icon" />
                                <h3>Выезд по Москве и области</h3>
                                <p>Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
                            </div>

                            <div className={b.about_work_card}>
                                <img src={iconTwo} alt="icon" />
                                <h3>Работаем по договору</h3>
                                <p>Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
                            </div>

                            <div className={b.about_work_card}>
                                <img src={iconThre} alt="icon" />
                                <h3>Поможем с созданием обработкой изображения</h3>
                                <p>Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
                            </div>

                            <div className={b.about_work_card}>
                                <img src={iconFor} alt="icon" />
                                <h3>Выезд по Москве и области</h3>
                                <p>Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
                            </div>
                        </div>
                    </div>


                    <div className={b.formBox}>
                        <div className={b.form_box}>
                            <div className={b.form_content}>
                                <h2>Отправьте нам свой дизайн на проверку или создайте собственный дизайн обоев</h2>
                                <p>Оставьте заявку, наш менеджер свяжется с Вами в ближайшее время и ответит на все интересующие вопросы.</p>
                            </div>
                            <div className={b.form_inp}>
                                <h3>У вас есть свой дизайн?</h3>
                                <button className={b.btn_send}>Да, отправить на проверку</button>
                                <button className={b.btn_help} >Нет, нужна помощь дизайнера</button>
                                <h4>Загрузите ваш дизайн:</h4>
                                <input type="file" placeholder='Прикрепить файл...' />
                                <h4>Ваше имя:</h4>
                                <input type="text" placeholder='Имя' />
                                <h4>Номер телефона:</h4>
                                <input type="tel" placeholder='(996) --- --- ---' />
                                <button className={b.btn_more}>Узнать подробнее</button>
                            </div>
                        </div>

                        <img className={b.form_blue} src={blueImg} alt="fone" />
                        <img className={b.form_orange} src={orangeImg} alt="fone" />
                        <img className={b.form_yellow} src={yellowImg} alt="fone" />
                    </div>

                    <div className={b.project_box}>
                        <div className={b.project_card_left}>
                            <h2>Создание уникального дизайна в квартире, доме, офисе</h2>
                            <p>Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
                        </div>

                        <div className={b.project_card_rigth}>
                            <h2>Создание уникального дизайна в квартире, доме, офисе</h2>
                            <p>Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
                        </div>

                        <div className={b.project_card_bottom_left}>
                            <h2>Создание уникального дизайна в квартире, доме, офисе</h2>
                            <p>Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
                        </div>

                        <div className={b.project_card_bottom_rigth}>
                            <h2>Создание уникального дизайна в квартире, доме, офисе</h2>
                            <p>Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
                        </div>

                        <img className={b.project1} src={project1} alt="logo" />
                        <img className={b.project2} src={project2} alt="logo" />
                        <img className={b.project3} src={project3} alt="logo" />
                        <img className={b.project4} src={project4} alt="logo" />
                        <img className={b.project5} src={project5} alt="logo" />
                    </div>

                    <div className={b.bg_submit}>
                        <img src={submit} alt="" />
                    </div>

                    <div className={b.Popularquestions_box}>
                        <h2>Популярные вопросы</h2>
                        <div className={b.select_box}>
                            <select className={b.left_select} name="" id="">
                                <option value="">Каким должно быть изображение?</option>
                                <option value="">1</option>
                            </select>

                            <select className={b.left_select} name="" id="">
                                <option value="">Как долго отпечаток на стене не теряет своего качества?</option>
                                <option value="">2</option>
                            </select>

                            <select className={b.left_select} name="" id="">
                                <option value="">Сколько времени займет печать?</option>
                                <option value="">3</option>
                            </select>

                            <select className={b.left_select} name="" id="">
                                <option value="">Имеет ли значение отделка стен?</option>
                                <option value="">4</option>
                            </select>

                            <select className={b.left_select} name="" id="">
                                <option value="">Какие краски используются в принтере WallPen?</option>
                                <option value="">5</option>
                            </select>

                            <select className={b.left_select} name="" id="">
                                <option value="">На какую высоту можно наносить изображение?</option>
                                <option value="">6</option>
                            </select>
                        </div>

                    </div>
                </div>

            </div>















        </div>
    );
};

export default ServicesDetal;