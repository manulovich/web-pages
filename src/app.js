import {ROOT_HEADER} from './constants/ROOT';
import watchScrollDirection from './utils/watchScrollDirection';


window.onload = () => {
    watchScrollDirection(() => {
        /* constriction header */
        ROOT_HEADER.classList.add('header--scroll-down');
    }, () => {
        /* expansion header */
        ROOT_HEADER.classList.remove('header--scroll-down')
    });
}