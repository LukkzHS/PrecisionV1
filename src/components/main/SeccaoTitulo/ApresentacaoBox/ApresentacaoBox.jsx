import styles from './ApresentacaoBox.module.css';


function ApresentacaoBox() {
    return (
        
        <div className={styles.apresentacaoBox}>
            {/* <span><a href="https://www.freepik.com/free-photo/nature-product-backdrop-farm-sunlight_18836159.htm#fromView=search&page=1&position=0&uuid=3efa94c9-2cd3-4137-aba5-30cf63920110">Image by rawpixel.com on Freepik</a></span> */}
            <div>
                <div className={styles.productImage1}></div>
                <div className={styles.productImage2}></div>
                <div className={styles.text}>
                    <h1>Dosador de precisão para fertilizantes</h1>
                    <h3>Uniformidade</h3>
                    <h3>+</h3>
                    <h3>Praticidade</h3>
                    <h3>=</h3>
                    <h3>Maior rentabilidade</h3>
                </div>
            </div>
        </div>
    );
}

export default ApresentacaoBox;