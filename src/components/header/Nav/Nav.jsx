import styles from "./Nav.module.css";
import React, { useState } from 'react';

function Nav() {
    const [sidebarDisplay,setSidebarDisplay] = useState('none');

    function showSidebar() {
        setSidebarDisplay('flex');
    }
    function hideSidebar() {
        setSidebarDisplay('none');
    }
    function handleLinkClick(event) {
        event.preventDefault();
    }
    return (
        <nav>
            <ul className={styles.sidebar} style={{display:sidebarDisplay}}>
                <li onClick={hideSidebar}><a href="#" onClick={handleLinkClick}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
                <li><a href="#quemSomos">Sobre nós</a></li>
                <li><a href="#apresentacao">Produtos</a></li>
                <li><a href="#contatos">Contatos</a></li>
            </ul>
            <div className={styles.container}>
                <ul>
                    <li><a href="#"><img src="precisionLogo.jpg" alt="" /></a></li>
                    <li className={styles.hideOnMobile}><a href="#quemSomos">Sobre nós</a></li>
                    <li className={styles.hideOnMobile}><a href="#apresentacao">Produtos</a></li>
                    <li className={styles.hideOnMobile}><a href="#contatos">Contatos</a></li>
                    <li className={styles.menuButton} onClick={(event) => {showSidebar(); handleLinkClick(event);}}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
                </ul>

            </div>
            
        </nav>
    );
}

export default Nav;