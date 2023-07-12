import { CardVideo } from 'components/CardVideo';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { styled } from 'styled-components';
import arrowRight from 'assets/arrow-right.svg';

const StyledSlider = styled.div`
    .slider {
        width: 1449px;
    }
`
export const Slider = () => {
    const TOTAL_SLIDES = 5;
    const [current, setCurrent] = useState(3);
    const ref = useRef(null);
    const isPhone = useMediaQuery({ query: '(max-width: 425px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
    const isLaptop = useMediaQuery({ query: '(max-width: 1024px)' });
    
    const next = () => {
        if (current >= TOTAL_SLIDES) return
        else setCurrent(current + 1)
    }

    const prev = () => {
        if (current === 3) return
        else setCurrent(current - 1)
    }

    useEffect(() => {
        ref.current.style.transition = 'all 0.2s ease-in-out';
        let percent = 0;
        
        switch (true) {
            case isPhone:
                percent = 215;
                break;
            case isTablet:
                percent = 195;
                //257
                break;
            case isLaptop:
                percent = 255;
                break;
            default:
                percent = 336;
                break;
        }
        let traslate = (current - 3) * percent;
        ref.current.style.transform = `translateX(-${traslate}px)`;
        ref.current.style.className += "hello";
    }, [current]);
    return (
        <StyledSlider>
            <div className='slider'>
                <div className="carousel">
                    <div ref={ref} className="productSale">
                        <div id="0">
                            <CardVideo imgNumber={1} isWatch={true}></CardVideo>
                        </div>
                        <div id="1">
                            <CardVideo imgNumber={0} isWatch={false}></CardVideo>
                        </div>
                        <div id="2">
                            <CardVideo imgNumber={1} isWatch={true}></CardVideo>
                        </div>
                        <div id="3">
                            <CardVideo imgNumber={0} isWatch={false} ></CardVideo>
                        </div>
                        <div id="4">
                            <CardVideo imgNumber={1} isWatch={true} ></CardVideo>
                        </div>
                        <div id="5">
                            <CardVideo imgNumber={0} isWatch={false} ></CardVideo>
                        </div>
                    </div>
                    <a className="prev" onClick={() => prev()}> <img src={arrowRight} alt="" /> </a>
                    <a className="next" onClick={() => next()}> <img src={arrowRight} alt="" /> </a>
                </div>
            </div>
        </StyledSlider>
    )
}