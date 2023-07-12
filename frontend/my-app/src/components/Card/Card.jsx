import { styled } from "styled-components";
import filmAvatar from "assets/film-avatar.svg";
import filmBladeRunner from "assets/film-blade-runner.svg";
import { Button } from "components/Button";

const StyledCard = styled.div`
    .card {
        display: flex;
        flex-direction: column;
        align-items: ${props => props.title_center};
        border: 10px;
        transition-duration: 0.5s;
        position: relative;
        span {
            color: white;
        }
        span.style-title {
            font-size: ${props => props.font_size};
            font-weight: ${props => props.font_weight};
            line-height: ${props => props.line_height};
        }
        img {
            width: ${props => props.width} ;
            height: ${props => props.height};
            border-radius: ${props => props.radius};
        }
        button {
            position: absolute;
            top: -15px;
            right: 90px;
        }
    }
`
export const Card = ({title, genres, srcImg, width, height, isGird, title_center, font_size, font_weight, line_height, radius, ...res}) => {
    return (
        <StyledCard width = {width} height = {height} title_center = {title_center} font_size = {font_size} font_weight = {font_weight} line_height = {line_height} radius = {radius} {...res}>
            <div className="card">
                <div className="avatar">
                    {srcImg ? <img src={filmAvatar} alt="" /> : <img src={filmBladeRunner} alt="" />}
                </div>
                <span className="style-title">{title}</span>
                {isGird ? 
                (<>
                    <span className="genres">{genres}</span>
                    <Button title={"7.5"} text_color={"white"} width={"40px"} height={"19px"} radius={"40px"} border_custom={"2px solid transparent"} font_size_text={"12px"}></Button>
                </>)
                 : ""}
                
            </div>
        </StyledCard>
    )
}

Card.defaultProps = {
    font_size: '12px',
    font_weight: 400,
};