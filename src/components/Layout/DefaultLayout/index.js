import Header from '~/components/Layout/components/Header';
import SlideBar from './Sidebar';
import className from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = className.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SlideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
