import styles from 'styled-components'

const Navbar__section = styles.div`
    border-top: 1px solid #f44339;
    border-bottom: 6px solid #F44336;
    padding: 0px 15px;
    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        list-style-type: none;
        li{
            max-width: 150px;
            padding: 15px 30px;
            transform: skew(-10deg);
            background: #ececec;
            border-right: 2px solid #ffffff;
            a{
                text-decoration: none;
                font-size: 16px;
                font-weight: 600;
                color: #F44336;
            }
        }
    }
`

export default Navbar__section;