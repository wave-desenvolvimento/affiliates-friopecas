import React from 'react'
import styles from './style.css'
import { SvgInfocard } from '../../Icons'

const isMobile = window.innerWidth < 728


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
