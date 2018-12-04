import styles from 'styled-components';

const Header__section = styles.div`
    min-height: 70px;
    margin: 0;
    padding: 15px;
    box-shadow: 0px 4px 15px -3px rgba(149, 154, 158, 0.360784);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .h__logo{
        flex: 1;
        h3{
            margin: 0;
            font-size: 50px;
            margin-left: 30px;
            background: red;
            width: 130px;
            text-align: center;
            color: #fff;
            transform: skewY(-8deg);
        }
    }
    .h__promotion{
        flex:1;
    }
    .h__cart{
        flex:1;
        text-align:right;
        padding: 0 30px;
        img{
            width: 34px;
            box-shadow: 0px 0px 21px 5px rgba(0, 0, 0, 0.15);
            border-radius: 5px;
            background: #6297b1;
            padding: 5px;
        }
        .nop__in__cart{
            font-size: 18px;
            position: absolute;
            color: #6297b1;
            background: #fed944;
            width: 25px;
            height: 25px;
            text-align: center;
            border-radius: 50%;
            margin-left: -20px;
        }
    }
`

export default Header__section;