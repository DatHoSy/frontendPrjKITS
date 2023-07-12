import styled from 'styled-components';
import backgroudFilm from 'assets/backgroud-film.svg';
import blackWidow from 'assets/black-widow.svg';
import marvelLogo from 'assets/marvel-logo.svg';
import rating from 'assets/4stars1.svg';
import vertical from 'assets/vertical.svg';
import arrowRight from 'assets/arrow-right.svg';
// import {ReactComponent as Play} from 'assets/play.svg';
// import {ReactComponent as Plus} from 'assets/plus.svg';
import play from 'assets/play.svg';
import plus from 'assets/plus.svg';

const StyledBanner = styled.div`
    background-color: #190401;
    .banner {
        position: relative;
        .movie-bg{
            width: 1440px;
        }
    }

    .banner-left {
        position: absolute;
        display: flex;
        flex-direction: column;
        top: 107px;
        left: 54px;
        gap: 25px;
        .movie-logo {
            text-align: center;
            img {
                width: 280px;
            }
        }
        .movie-name img {
            width: 490px;
        }
        .movie-rate img {
            width: 210px;
        }
        div {
            ul {
                padding: 0;
                margin: 0;
                display: flex;
                align-items: center;
            }
            ul li {
                text-decoration: none;
                display: flex;
                margin-right: 12px;
                color: white;
            }
        }
        .action img {
            width: 55px;
            height: 55px;
        }
        .description {
            font-size: 12px;
            line-height: 15.6px;
            width: 451px;
            height: 67px;
            color: white;
        }
    }

    .banner-right {
        position: absolute;
        right: 17px;
        top: 344px;
    }
`
export const Banner = () => {
    return (
        <StyledBanner>
            <div className='banner'>
                <img className='movie-bg' src={backgroudFilm} alt="avatar film" />
                <div className='banner-left'>
                    <div className='movie-logo' ><img src={marvelLogo} alt="photo" /></div>
                    <div className='movie-name'><img src={blackWidow} alt="photo" /></div>
                    <div className='movie-rate'><img src={rating} alt="photo" /></div>
                    <div>
                        <ul>
                            <li>Drama</li>
                            <li><img src={vertical} alt="" /></li>
                            <li>Drama</li>
                            <li><img src={vertical} alt="" /></li>
                            <li>Drama</li>
                        </ul>
                    </div>
                    <div className='action'>
                        {/* <Play/> */}
                        {/* <Plus/> */}
                        <img src={play} alt="" />
                        <img src={plus} alt="" />
                    </div>
                    <p className='description'>Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.
                    </p>
                </div>
                <div className='banner-right'>
                    <img src={arrowRight} alt="" />
                </div>
            </div>
        </StyledBanner>
    )
}