import React from "react";
import styles from "./styles.css";
import { User, SvgInfocard, Training, Phone, Invoice } from '../../Icons'

interface QuickAccessItem {
    label: string;
    link: string;

    type?: "primary" | "secondary";
}

interface ClubeFriopecasProps {
    title: string;
    subtitle: string;
    content: string;
    highlight: string;
    quickAccess: QuickAccessItem[];
}



const ClubeFriopecas: StorefrontFunctionComponent<ClubeFriopecasProps> = ({
    // title = "Aproveite os",
    // highlight = "benefícios",
    // subtitle = "Aproveite os benefícios do Clube Friopeças!",
    // content = "Acessos rápidos:"
}) => {
    const isMobile = window.innerWidth < 728
    return (
        <div className={styles.container}>

            <div className={styles["quickAcess-container"]}>
                <div className={styles["quickAcess-wrapper"]}>

                    <div className={styles["quickAcess-title"]}>
                        <SvgInfocard />
                        <p>Clube Friopeças</p>
                    </div>

                    <h3 className={styles["quickAcess-subtitle"]}>Aproveite os <span> benefícios </span>
                        do Clube Friopeças!</h3>

                    <p className={styles['quickAcess-label']}>Acessos rápidos:</p>
                    {
                        isMobile ? (
                            <div className={styles['quickAcessgrid-btn']}>
                                <div className={styles['quickAcessgrid-btn--first-row']}>

                                    <a href="" className={styles['quickAcess-btn1']}>
                                        <User />
                                        Minha Conta
                                    </a>
                                    <a href="" className={styles['quickAcess-btn1']}>
                                        <Training />
                                        Treinamentos
                                    </a>
                                </div>
                                <a href="" className={styles['quickAcess-btn2']}>
                                    <Invoice />
                                    Extrato de Comissões
                                </a>
                                <a href="" className={styles['quickAcess-btn3']}>
                                    <Phone />
                                    Suporte
                                </a>
                            </div>
                        ) : (
                            <div className={styles['quickAcessgrid-btn']}>
                                <a href="" className={styles['quickAcess-btn1']}>
                                    <User />
                                    Minha Conta
                                </a>
                                <a href="" className={styles['quickAcess-btn1']}>
                                    <Training />
                                    Treinamentos
                                </a>
                                <a href="" className={styles['quickAcess-btn2']}>
                                    <Invoice />
                                    Extrato de Comissões
                                </a>
                                <a href="" className={styles['quickAcess-btn3']}>
                                    <Phone />
                                    Suporte
                                </a>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

ClubeFriopecas.schema = {
    title: "Clube Friopeças",
    description: "Componente de Clube Friopeças para acesso rápido.",
    type: "object",
    properties: {
        title: {
            title: "Título",
            type: "string",
            default: "Aproveite os",
        },
        highlight: {
            title: "Texto em destaque",
            type: "string",
            default: "benefícios",
        },
        quickAccess: {
            title: "Acessos Rápidos",
            type: "array",
            items: {
                type: "object",
                properties: {
                    label: {
                        title: "Texto do botão",
                        type: "string",
                        default: "Minha Conta",
                    },
                    link: {
                        title: "Link do botão",
                        type: "string",
                        default: "#",
                    },
                    type: {
                        title: "Tipo do botão",
                        type: "string",
                        enum: ["primary", "secondary"],
                        default: "secondary",
                    },
                },
            },
        },
    },
};

export default ClubeFriopecas;
