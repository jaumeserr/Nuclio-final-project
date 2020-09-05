import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

/***************************/

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
}

body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ${'' /* background: teal; */}
    background-image: linear-gradient(-20deg, #0169df 0%, #5191da 100%);
    color: #324e63;
}

a,
a:hover {
    text-decoration: none;
}

${
    '' /* .global_wrapper {
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    min-height: 100vh;
    padding: 50px 20px;
    color: red;
} */
}

/** BUTTONS **/

.button {
    background: none;
    border: none;
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
    font-size: 17px;
    margin: 15px;
    min-width: 170px;
    border-radius: 50px;
    min-height: 45px;
    color: #fff;
    cursor: pointer;
    backface-visibility: hidden;
    transition: all 0.3s;
}
@media screen and (max-width: 768px) {
    .button {
        margin: 15px 25px;
    }
}
@media screen and (max-width: 576px) {
    .button {
        min-width: inherit;
        margin: 0;
        margin-bottom: 16px;
        width: 100%;
        max-width: 300px;
    }
    .button:last-child {
        margin-bottom: 0;
    }
}
.button:focus {
    outline: none !important;
}
@media screen and (min-width: 768px) {
    .button:hover {
        transform: scale(1.01);
    }
}
/* .button:first-child {
    margin-left: 0;
}
.button:last-child {
    margin-right: 0;
} */
.button.button--blue {
    background: linear-gradient(45deg, #0e71c8, #1da1f2);
    box-shadow: 0px 4px 30px rgba(19, 127, 212, 0.35);
}
.button.button--blue:hover {
    box-shadow: 0px 7px 30px rgba(19, 127, 212, 0.75);
}
.button.button--green {
    background: linear-gradient(45deg, #217008, #0ead31);
    box-shadow: 0px 4px 30px rgba(45, 95, 41, 0.35);
}
.button.button--green:hover {
    box-shadow: 0px 7px 30px rgba(45, 95, 41, 0.75);
}
.button.button--yellow {
    background: linear-gradient(45deg, #dd6d05, #ecbf41);
    box-shadow: 0px 4px 30px rgba(255, 123, 0, 0.35);
}
.button.button--yellow:hover {
    box-shadow: 0px 7px 30px rgba(255, 123, 0, 0.75);
}
.button.button--red {
    background: linear-gradient(45deg, #d5135a, #f05924);
    box-shadow: 0px 4px 30px rgba(223, 45, 70, 0.35);
}
.button.button--red:hover {
    box-shadow: 0px 7px 30px rgba(223, 45, 70, 0.75);
}
.button.button--gray {
    background: linear-gradient(45deg, #bebebe, #c4c4c4);
    box-shadow: 0px 4px 30px rgba(94, 94, 94, 0.35);
    color: #1f2a33;
}
.button.button--gray:hover {
    box-shadow: 0px 7px 30px rgba(87, 87, 87, 0.75);
}
.button.button--gray-soft-shadow {
    background: linear-gradient(45deg, #d4d4d4, #d4d4d4);
    color: #1f2a33;
}
.button.button--gray-soft-shadow:hover {
    box-shadow: 0px 2px 10px rgba(87, 87, 87, 0.75);
}

/***************************/

`;

export default GlobalStyle;
