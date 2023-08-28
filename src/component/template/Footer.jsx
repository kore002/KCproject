import { Link } from 'react-router-dom';
import Button from '../assets/Button';

function Footer() {
    return(
        <div>
            <hr />
            <nav>
                <ul>
                    <li><Button name="HOME" action={ Link }/> </li>
                    {/* <li><ButtonWrite /></li> */}
                </ul>
            </nav>
        </div>
    );
}
 
export default Footer;