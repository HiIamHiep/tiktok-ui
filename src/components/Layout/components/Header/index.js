import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import css from './Header.module.scss';
import images from '~/assets/images';
import { faMagnifyingGlass, faSpinner, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const cx = classNames.bind(css);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <div className={cx('search')}>
                    <input placeholder="Tìm kiếm" spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faXmarkCircle} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('action')}></div>
            </div>
        </div>
    );
}

export default Header;
