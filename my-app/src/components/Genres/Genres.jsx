import { Button } from "components/Button";
import { styled } from "styled-components";
import menu from 'assets/menu1.svg';
import filter from 'assets/filter.svg';


const StyledGenres = styled.div`
    .genres {
        .title {
            display: flex;
            padding: 50px 50px;
            gap: 15px;
            align-items: center;
            .line-white {
                border: 1px solid white;
                margin: 0;
                flex-basis: 85%;
                height: 1px;
            }
        }
        table {
            td {
                padding: 10px 61px;
                color: #ffff;
                font-size: 23px;
                font-style: normal;
                font-weight: 400;
                line-height: 22px;
            }
        }
        .buttonGenres {
            margin-top: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 80px;
        }
        .genres-content {
            background-color: #252525;
            border-radius: 40px;
            padding-bottom: 40px;
            padding-top: 10px;
        }
    }
`
export const Genres = () => {
    return (
        <StyledGenres>
            <div className="genres">
                <div className="title">
                    <Button title={"Genres"} text_color={"#E4E4E4"} width={"140px"} height={"40px"} radius={"10px"} border_custom={"1px solid #E4E4E4"} font_size_text={"13px"} isGenres={true} bg_color={"#171616"}></Button>
                    <hr className="line-white" />
                    <img src={menu} alt="photo" />
                    <img src={filter} alt="photo" />
                </div>
                <div className="genres-content">
                    <table>
                        <tbody>
                            <tr className="trGenres1">
                                <td>ACTION</td>
                                <td>BIOGRAPHY</td>
                                <td>DRAMA</td>
                                <td>HISTORY</td>
                                <td>ROMANCE</td>
                                <td>TV MOVIE</td>
                            </tr>
                            <tr className="trGenres2">
                                <td>ACTION</td>
                                <td>COMEDY</td>
                                <td>FANTASY</td>
                                <td>MUSIC</td>
                                <td>SERIES</td>
                                <td>THRILLER</td>
                            </tr>
                            <tr className="trGenres3">
                                <td>ADVENTURE</td>
                                <td>BIOGRAPHY</td>
                                <td>FAMILY</td>
                                <td>NEWS</td>
                                <td>SCI-FI</td>
                                <td>WESTERN</td>
                            </tr>
                            <tr className="trGenres4">
                                <td>ANIMATION</td>
                                <td>DOCUMENTARY</td>
                                <td>HORROR</td>
                                <td>POLITICS</td>
                                <td>TALK</td>
                                <td>WAR</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="buttonGenres">
                        <Button title={"COUNTRY"} text_color={"#171616"} width={"171px"} height={"40px"} radius={"40px"} border_custom={"2px solid #D9D9D9"} font_size_text={"16px"} border_bottom_text={"1px solid #252525"} isGenres={true} bg_color={"#D9D9D9"}></Button>
                        <Button title={"YEAR"} text_color={"#171616"} width={"171px"} height={"40px"} radius={"40px"} border_custom={"2px solid #D9D9D9"} font_size_text={"16px"} border_bottom_text={"1px solid #252525"} isGenres={true} bg_color={"#D9D9D9"}></Button>
                    </div>
                </div>
            </div>
        </StyledGenres>
    )
}