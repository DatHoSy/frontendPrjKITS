import { Card } from "components/Card/Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";

const StyledShowCase = styled.div`
    .showcase {
        display: flex;
        justify-content: space-around;
        height: 213px;
        padding: 15px;
        align-items: flex-end;
    }
    .card:hover {
        transform: translateY(-35px);
        transition: all 0.5s ease-out ;
    }
`
export const ShowCase = () => {
    const dispatch = useDispatch();
    let rawData = useSelector(state => state.movie.movies);
    useEffect(() => {
        dispatch.movie.getMovieShowCase();
    }, [])

    var listCard = [];
    for (var movieObj of rawData.entries()) {
        let [index, movie] = movieObj;
        const driveLink = movie.movieImage;
        const fileId = driveLink.match(/[-\w]{25,}/);
        let src = "https://drive.google.com/uc?export=download&id=" + fileId[0];
        if (!driveLink) { src = "https://drive.google.com/uc?export=download&id="}
        listCard.push(
            <Card className={"showcard" + (index + 1)} title={movie.title} srcImg={src} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
        );
    }
    return (
        <StyledShowCase>
            <div className="showcase">
                {listCard}
                {/* <Card className="showcard1" title={"Avatar"} srcImg={true} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard2" title={"filmBladeRunner"} srcImg={false} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard3" title={"Avatar"} srcImg={true} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard4" title={"filmBladeRunner"} srcImg={false} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard5" title={"Avatar"} srcImg={true} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard6" title={"filmBladeRunner"} srcImg={false} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard7" title={"Avatar"} srcImg={true} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard8" title={"filmBladeRunner"} srcImg={false} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard9" title={"Avatar"} srcImg={true} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard10" title={"filmBladeRunner"} srcImg={false} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard11" title={"Avatar"} srcImg={true} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard12" title={"filmBladeRunner"} srcImg={false} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card> */}
            </div>
        </StyledShowCase>
    )
}