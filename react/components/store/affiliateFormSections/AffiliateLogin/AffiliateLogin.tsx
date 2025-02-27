import React from 'react'
import styles from './style.css'

const AffiliateLogin = () => {
    return (
        <div className={styles['container-login']}>
            <div className={styles['container-login__wrapper']}>
                <h3>Já Preenchi o cadastro</h3>
                <a target="_blank" href='/login'>Fazer Login</a>
            </div>
        </div>
    )
}

export default AffiliateLogin