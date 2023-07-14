import { Card } from "components/Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";

const StyledGrid = styled.div`
    .grid-movie {
        display: flex;
        flex-direction: column;
        margin: 0 50px;
    }
    .grid-movie .title {
        display: flex;
        justify-content: space-between;
        color: #ffff;
        margin: 40px 0;
        span {
            font-size: 24px;
            font-weight: 400;
            line-height: 22px;
            padding-bottom: 5px;
        }
        span:first-child {
            border-bottom: 1px solid #ffff;
        }
        span:last-child {
            a {
                color: #ffff;
                text-decoration: none;
            }
            border-bottom: 1px solid #ffff;
        }
    }
    .grid-content {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
    .grid-block1, .grid-block2 {
        display: flex;
        justify-content: space-between;
    }
`
export const GridMovie = () => {
    const dispatch = useDispatch();
    let rawData = useSelector(state => state.movie.movies);
    let data = rawData.slice(0, 10);
    // useEffect(() => {
    //     dispatch.movie.;
    // }, [])
    var listCard1 = [];
    var listCard2 = [];
    console.log("List SIZE: " + rawData.length);
    for (var movieObj of data.entries()) {
        let [index, movie] = movieObj;
        const driveLink = movie.movieImage;
        const fileId = driveLink.match(/[-\w]{25,}/);
        let src = "https://drive.google.com/uc?export=download&id=" + fileId[0];
        if (!driveLink) { src = "https://drive.google.com/uc?export=download&id="}
        let className = "block";
        if (index < 5) {
            className += "1-movie" + (index + 1);
            listCard1.push(
                <Card className={className} title={movie.title} srcImg={src} width={"210px"} height={"301px"} genres={"Comedy, Horror, Thriller"} isGrid={true} font_size={"24px"} font_weight={"400"} line_height={"22px"} radius={"20px"}></Card>
            );
        } else {
            className += "2-movie" + (index - 4);
            listCard2.push(
                <Card className={className} title={movie.title} srcImg={src} width={"210px"} height={"301px"} genres={"Comedy, Horror, Thriller"} isGrid={true} font_size={"24px"} font_weight={"400"} line_height={"22px"} radius={"20px"}></Card>
            );
        }
    }
    return (
        <StyledGrid>
            <div className="grid-movie">
                <div className="title">
                    <span>POPULAR RIGHT NOW</span>
                    <span><a href="#">SEE ALL &gt;</a></span>
                </div>
                <div className="grid-content">
                    <div className="grid-block1">
                        {listCard1}
                        {/* <Card className="block1-movie1" title={"Avatar"} srcImg={true} width={"210px"} height={"301px"} genres={"Comedy, Horror, Thriller"} isGrid={true} font_size={"24px"} font_weight={"400"} line_height={"22px"} radius={"20px"}></Card>
                        <Card className="block1-movie2" title={"filmBladeRunner"} srcImg={false} width={"210px"} height={"301px"} genres={"Comedy, Horror, Thriller"} isGrid={true} font_size={"24px"} font_weight={"400"} line_height={"22px"} radius={"20px"}></Card>
                        <Card className="block1-movie3" title={"Avatar"} srcImg={true} width={"210px"} height={"301px"} genres={"Comedy, Horror, Thriller"} isGrid={true} font_size={"24px"} font_weight={"400"} line_height={"22px"} radius={"20px"}></Card>
                        <Card className="block1-movie4" title={"filmBladeRunner"} srcImg={false} width={"210px"} height={"301px"} genres={"Comedy, Horror, Thriller"} isGrid={true} font_size={"24px"} font_weight={"400"} line_height={"22px"} radius={"20px"}></Card>
                        <Card className="block1-movie5" title={"Avatar"} srcImg={true} width={"210px"} height={"301px"} genres={"Comedy, Horror, Thriller"} isGrid={true} font_size={"24px"} font_weight={"400"} line_height={"22px"} radius={"20px"}></Card> */}
                    </div>
                    <div className="grid-block2">
                        {listCard2}
                        {/* <Card className="block2-movie1" title={"Avatar"} srcImg={true} width={"210px"} height={"301px"} genres={"Comedy, Horror, Thriller"} isGrid={true} font_size={"24px"} font_weight={"400"} line_height={"22px"} radius={"20px"}></Card>
                        <Card className="block2-movie2" title={"filmBladeRunner"} srcImg={false} width={"210px"} height={"301px"} genres={"Comedy, Horror, Thriller"} isGrid={true} font_size={"24px"} font_weight={"400"} line_height={"22px"} radius={"20px"}></Card>
                        <Card className="block2-movie3" title={"Avatar"} srcImg={true} width={"210px"} height={"301px"} genres={"Comedy, Horror, Thriller"} isGrid={true} font_size={"24px"} font_weight={"400"} line_height={"22px"} radius={"20px"}></Card>
                        <Card className="block2-movie4" title={"filmBladeRunner"} srcImg={false} width={"210px"} height={"301px"} genres={"Comedy, Horror, Thriller"} isGrid={true} font_size={"24px"} font_weight={"400"} line_height={"22px"} radius={"20px"}></Card>
                        <Card className="block2-movie5" title={"Avatar"} srcImg={true} width={"210px"} height={"301px"} genres={"Comedy, Horror, Thriller"} isGrid={true} font_size={"24px"} font_weight={"400"} line_height={"22px"} radius={"20px"}></Card> */}
                    </div>
                </div>
            </div>
        </StyledGrid>
    )
}