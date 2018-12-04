import Navbar from './Navbar';
import Header__section from './style/s__header';


const Header = () => (
    <div>
        <Header__section>
            <div className="h__logo">
                <h3>Logo</h3>
            </div>
            <div className="h__promotion"></div>
            <div className="h__cart">
                <span className="nop__in__cart">4</span>
                <img src="/static/img/shopping-bag.svg" alt="shop cart"/>
            </div>
        </Header__section>
        <Navbar />
    </div>
)

export default Header;