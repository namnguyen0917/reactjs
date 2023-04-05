import propTypes from 'prop-types';

import './GlobalStyles.scss';
import '../css/bootstrap.min.css';
import '../css/metisMenu.min.css';
import '../css/startmin.css';
import '../css/font-awesome.min.css';

function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: propTypes.node.isRequired,
};

export default GlobalStyles;
