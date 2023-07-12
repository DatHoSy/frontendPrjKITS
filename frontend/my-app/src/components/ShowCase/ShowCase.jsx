import { Card } from "components/Card/Card";
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
    return (
        <StyledShowCase>
            <div className="showcase">
                <Card className="showcard1" title={"Avatar"} srcImg={true} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
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
                <Card className="showcard12" title={"filmBladeRunner"} srcImg={false} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
            </div>
        </StyledShowCase>
    )
}