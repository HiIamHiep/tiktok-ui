import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

function Sidebar() {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('wrapper')}>
            <h2>Sidebar</h2>
        </div>
    );
}

export default Sidebar;
