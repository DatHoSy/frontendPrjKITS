import { Card } from "components/Card";
import { styled } from "styled-components";

const StyledGird = styled.div`
    .gird-movie {
        display: flex;
        flex-direction: column;
        margin: 0 50px;
    }
    .gird-movie .title {
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
    .gird-content {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
    .gird-block1, .gird-block2 {
        display: flex;
        justify-content: space-between;
    }
`
export const GirdMovie = () => {
    return (
        <StyledGird>
            <div className="gird-movie">
                <div className="title">
                    <span>POPULAR RIGHT NOW</span>
                    <span><a href="#">SEE ALL &gt;</a></span>
                </div>
                <div className="gird-content">
                    <div className="gird-block1">
                        <Card className="block1-movie1" title={"Avatar"} srcImg={true} width={"210px"} height={"301px"} genres={"Comedy, Horror, Thriller"} isGird={true} font_size={"24px"} font_weight={"400"} line_height={"22px"} radius={"20px"}></Card>
                        <Card className="block1-movie2" title={"filmBladeRunner"} srcImg={false} width={"210px"} height={"301px"} genres={"Comedy, Horror, Thriller"} isGird={true} font_size={"24px"} font_weight={"400"} line_height={"22px"} radius={"20px"}></Card>
                        <Card className="block1-movie3" title={"Avatar"} srcImg={true} width={"210px"} height={"301px"} genres={"Comedy, Horror, Thriller"} isGird={true} font_size={"24px"} font_weight={"400"} line_height={"22px"} radius={"20px"}></Card>
                        <Card className="block1-movie4" title={"filmBladeRunner"} srcImg={false} width={"210px"} height={"301px"} genres={"Comedy, Horror, Thriller"} isGird={true} font_size={"24px"} font_weight={"400"} line_height={"22px"} radius={"20px"}></Card>
                        <Card className="block1-movie5" title={"Avatar"} srcImg={true} width={"210px"} height={"301px"} genres={"Comedy, Horror, Thriller"} isGird={true} font_size={"24px"} font_weight={"400"} line_height={"22px"} radius={"20px"}></Card>
                    </div>
                    <div className="gird-block2">
                        <Card className="block2-movie1" title={"Avatar"} srcImg={true} width={"210px"} height={"301px"} genres={"Comedy, Horror, Thriller"} isGird={true} font_size={"24px"} font_weight={"400"} line_height={"22px"} radius={"20px"}></Card>
                        <Card className="block2-movie2" title={"filmBladeRunner"} srcImg={false} width={"210px"} height={"301px"} genres={"Comedy, Horror, Thriller"} isGird={true} font_size={"24px"} font_weight={"400"} line_height={"22px"} radius={"20px"}></Card>
                        <Card className="block2-movie3" title={"Avatar"} srcImg={true} width={"210px"} height={"301px"} genres={"Comedy, Horror, Thriller"} isGird={true} font_size={"24px"} font_weight={"400"} line_height={"22px"} radius={"20px"}></Card>
                        <Card className="block2-movie4" title={"filmBladeRunner"} srcImg={false} width={"210px"} height={"301px"} genres={"Comedy, Horror, Thriller"} isGird={true} font_size={"24px"} font_weight={"400"} line_height={"22px"} radius={"20px"}></Card>
                        <Card className="block2-movie5" title={"Avatar"} srcImg={true} width={"210px"} height={"301px"} genres={"Comedy, Horror, Thriller"} isGird={true} font_size={"24px"} font_weight={"400"} line_height={"22px"} radius={"20px"}></Card>
                    </div>
                </div>
            </div>
        </StyledGird>
    )
}