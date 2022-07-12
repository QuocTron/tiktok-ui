import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import images from '~/assets/images';
import styles from './Image.module.scss';

function Image({ src, alt, className, fallBack: customFallBack = images.noImage, ...props }, ref) {
    const [fallBack, setFalBack] = useState('');
    const handleError = () => {
        setFalBack(customFallBack);
    };
    // eslint-disable-next-line jsx-a11y/alt-text
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
