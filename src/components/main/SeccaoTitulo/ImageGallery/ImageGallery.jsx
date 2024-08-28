import styles from './ImageGallery.module.css';

function ImageGallery() {
    return (
            <div className={styles.container}>
                <div className={styles.image1}><span><a href="https://www.freepik.com/free-photo/harvesting-combine-field_29066451.htm#fromView=image_search&page=1&position=5&uuid=57ed6239-e65c-4fe3-a857-a6eee36da743"></a></span></div>
                <div className={styles.image2}><span><a href="https://www.freepik.com/free-photo/tractor-working-field_11133896.htm#fromView=image_search&page=1&position=0&uuid=57ed6239-e65c-4fe3-a857-a6eee36da743"></a></span></div>
            </div>

// Image by Oleksandr Ryzhkov on Freepik
// Image by aleksandarlittlewolf on Freepik
    );
}

export default ImageGallery;