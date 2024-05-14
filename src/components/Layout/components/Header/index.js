import classNames from 'classnames/bind';
import css from './Header.module.scss';
function Header() {
    const cx = classNames.bind(css);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </div>
    );
}

export default Header;
