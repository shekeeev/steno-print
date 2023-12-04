import React from 'react';
import s from '../AboutStudio/AboutStudio.module.css'
import sp from './Portfolio.module.css'
import leavesWall from '../../../../Assets/Janyl/leavesWallpaper.png'
import mountainWall from '../../../../Assets/Janyl/mountainWallpaper.png'
import homeIcon from '../../../../Assets/Janyl/home.png'
import {Pagination} from '@mui/material'
const Portfolio = () => {
    return (
        <div>
            <div className={s.bg}>
                <div className={s.container}>
                    <div className={s.titleBlock}>
                        <div className={s.titleTopLine}>
                            <img src={homeIcon} alt="homeIcon" />
                            <p>/</p>
                            <p>Портфолио</p>
                        </div>
                        <h1 className={s.title}>Портфолио</h1>
                    </div>

                    <div className={sp.wallpapersTypes}>
                        <button>Дизайнерские обои</button>
                        <button>Виниловые обои</button>
                        <button>Фирменные обои</button>
                    </div>

                    <div className={s.images}>
                        <img className={sp.wallpapers} src={leavesWall} alt="leavesWall" />
                        <img className={sp.wallpapers} src={mountainWall} alt="mountainWall" />

                        <img className={sp.wallpapers} src={mountainWall} alt="mountainWall" />
                        <img className={sp.wallpapers} src={leavesWall} alt="leavesWall" />

                        <img className={sp.wallpapers} src={leavesWall} alt="leavesWall" />
                        <img className={sp.wallpapers} src={mountainWall} alt="mountainWall" />

                        <img className={sp.wallpapers} src={mountainWall} alt="mountainWall" />
                        <img className={sp.wallpapers} src={leavesWall} alt="leavesWall" />

                        <img className={sp.wallpapers} src={leavesWall} alt="leavesWall" />
                        <img className={sp.wallpapers} src={mountainWall} alt="mountainWall" />

                        <img className={sp.wallpapers} src={mountainWall} alt="mountainWall" />
                        <img className={sp.wallpapers} src={leavesWall} alt="leavesWall" />
                        
                    </div>
                    <Pagination className={sp.counts} count={4} color="secondary" />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;