import {resolve} from 'styled-jsx/css';

export default resolve`

.chara{
    animation-fill-mode:forwards;
    display: inline-block;
    opacity:0;
}

@keyframes chars-fadeIn {
    0%{
        transform: rotateX(0deg);
        opacity: 0;
    }
    100% {
        transform: rotateX(360deg);
        opacity: 1;
    }
}

@keyframes kmd-color{
    0%{
        color: white;
        letter-spacing: 0px;
        transform: translateX(0px);
    }
    100%{
        color: deeppink;
        letter-spacing: -5px;
        transform: translateX(70px);
    }
}
@keyframes mnak-fadeOut{
    0%{
        opacity: 1;
    }
    100% { 
        opacity: 0;
        display: none;
    }
}

#K {
    animation-name: chars-fadeIn;
    animation-duration: 0.5s;
    animation-delay: 0.0s;
}

#M {
    animation-name: chars-fadeIn;
    animation-duration: 0.5s;
    animation-delay: 0.5s;
}

#D {
    animation-name: chars-fadeIn;
    animation-duration: 0.5s;
    animation-delay: 1.0s;
}

#M1 {
    animation-name: chars-fadeIn;
    animation-duration: 0.5s;
    animation-delay: 1.5s;
}

#N {
    animation-name: chars-fadeIn;
    animation-duration: 0.5s;
    animation-delay: 2.0s;
}

#A {
    animation-name: chars-fadeIn;
    animation-duration: 0.5s;
    animation-delay: 2.5s;
}

#K1 {
    animation-name: chars-fadeIn;
    animation-duration: 0.5s;
    animation-delay: 3.0s;
}

.kmd{
    display: inline-block;
    animation-name: kmd-color;
    animation-duration: 1s;
    animation-delay: 4.7s;
    animation-fill-mode:forwards;
}

.mnak{
    display: inline-block;
    animation-name: mnak-fadeOut;
    animation-duration: 1s;
    animation-delay: 4.7s;
    animation-fill-mode:forwards;
}

@keyframes development-appear{
    0%{
        opacity: 0;
        transform:translateX(0px)
    }
    100%{
        opacity: 1;
        transform:translateX(-35px)
    }
}
#development{
    opacity: 0;
    animation-fill-mode:forwards;
    display: inline-block;
    animation-delay: 4.7s;
    animation-name: development-appear;
    animation-duration: 1.5s;
}

#header{
    font-size: 40px;
    padding: 50px;
    text-align: center;
}

`