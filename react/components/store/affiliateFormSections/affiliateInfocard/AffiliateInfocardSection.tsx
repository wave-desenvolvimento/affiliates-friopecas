import React from 'react'
import styles from './style.css'

const isMobile = window.innerWidth < 728

const SvgInfocard = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M23.8399 10.6166L21.4474 5.8297C21.3592 5.65352 21.2372 5.49642 21.0884 5.36737C20.9395 5.23833 20.7667 5.13988 20.5798 5.07763C20.3929 5.01539 20.1955 4.99057 19.999 5.0046C19.8025 5.01863 19.6107 5.07123 19.4345 5.15939L17.103 6.3247L12.1914 5.02533C12.0654 4.99253 11.9331 4.99253 11.807 5.02533L6.89548 6.3247L4.56391 5.15939C4.38774 5.07123 4.19593 5.01863 3.99942 5.0046C3.80292 4.99057 3.60558 5.01539 3.41867 5.07763C3.23175 5.13988 3.05894 5.23833 2.91008 5.36737C2.76122 5.49642 2.63924 5.65352 2.5511 5.8297L0.158602 10.6156C0.0704354 10.7918 0.0178362 10.9836 0.00380791 11.1801C-0.0102204 11.3766 0.0145969 11.574 0.0768426 11.7609C0.139088 11.9478 0.237543 12.1206 0.366585 12.2695C0.495626 12.4183 0.652726 12.5403 0.828914 12.6285L3.36016 13.895L8.56235 17.6103C8.63901 17.6649 8.72517 17.7046 8.81641 17.7275L14.8164 19.2275C14.9421 19.259 15.0737 19.2575 15.1986 19.223C15.3235 19.1885 15.4373 19.1222 15.5289 19.0306L20.6917 13.8669L23.1686 12.6285C23.5242 12.4504 23.7945 12.1385 23.9202 11.7613C24.0459 11.384 24.0176 10.9723 23.8399 10.6166ZM18.6939 13.745L15.468 11.1613C15.3235 11.0455 15.1412 10.9873 14.9564 10.9979C14.7715 11.0085 14.5971 11.087 14.4667 11.2185C12.797 12.9003 10.9361 12.6875 9.74923 11.9375L13.803 8.00002H16.7852L19.3361 13.101L18.6939 13.745ZM3.89266 6.50002L5.81173 7.45814L3.41454 12.2441L1.49923 11.2869L3.89266 6.50002ZM14.7677 17.6685L9.31985 16.3072L4.70735 13.0128L7.33235 7.76283L11.9992 6.52627L12.918 6.76908L8.69923 10.8641L8.69173 10.8725C8.53292 11.0313 8.4118 11.2238 8.33731 11.4356C8.26281 11.6475 8.23684 11.8734 8.26132 12.0967C8.28579 12.3199 8.36009 12.5348 8.47872 12.7255C8.59735 12.9162 8.75729 13.0778 8.94673 13.1985C10.8742 14.4294 13.2002 14.2297 15.032 12.7297L17.6242 14.8119L14.7677 17.6685ZM20.5802 12.2431L18.1877 7.46189L20.1058 6.50002L22.4992 11.2869L20.5802 12.2431Z" fill="#1DA7E0" />
        </svg>
    )
}

const AffiliateInfocardSection = ({ title = "Clube Friopeças", subtitle = "Seja parceiro Friopeças e leve a excelência aos seus clientes!", content = "Lorem ipsum dolor sit amet consectetur. Massa ornare risus scelerisque nunc id magna tempor egestas.", imageMobile = "https://placehold.co/350x180", imageDesktop = "https://placehold.co/720x360" }) => {
    return (
        <div className={styles["AffiliateInfocard-container"]}>
            <div className={styles["AffiliateInfocard-wrapper"]}>
                <div className={styles["AffiliateInfocard-leftCol"]}>
                    {title &&
                        <div className={styles["AffiliateInfocard-title"]}>
                            <SvgInfocard />
                            <p>{title}</p>
                        </div>
                    }
                    {subtitle &&
                        <h3 className={styles["AffiliateInfocard-subtitle"]}>{subtitle}</h3>
                    }
                    {content &&
                        <p className={styles["AffiliateInfocard-content"]}>{content}</p>
                    }
                </div>
                <div className={styles["AffiliateInfocard-rightCol"]}>
                    {isMobile ? <img src={imageMobile} alt="image infocard" /> : <img src={imageDesktop} />}
                </div>
            </div>
        </div>
    )
}

AffiliateInfocardSection.schema = {
    title: 'Infocard - afiliação',
    type: 'object',
    properties: {
        title: {
            type: 'string',
            title: 'Título',
            default: 'Clube Friopeças'
        },
        subtitle: {
            type: 'string',
            title: 'Subtítulo',
            default: 'Seja parceiro Friopeças e leve a excelência aos seus clientes!'
        },
        content: {
            type: 'string',
            title: 'Conteúdo',
            default: 'Lorem ipsum dolor sit amet consectetur. Massa ornare risus scelerisque nunc id magna tempor egestas.'
        },
        imageMobile: {
            type: 'string',
            title: 'Imagem Mobile',
            default: 'https://placehold.co/350x180',
            widget: {
                "ui:widget": "image-uploader"
            }
        },
        imageDesktop: {
            type: 'string',
            title: 'Imagem Desktop',
            default: 'https://placehold.co/720x360',
            widget: {
                "ui:widget": "image-uploader"
            }
        }
    }
}

export default AffiliateInfocardSection
