import React from "react";
import style from './style.css';

const SvgListCard = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M30 5.625C25.1791 5.625 20.4664 7.05457 16.458 9.73293C12.4495 12.4113 9.32533 16.2181 7.48045 20.6721C5.63556 25.126 5.15285 30.027 6.09337 34.7553C7.03388 39.4836 9.35538 43.8268 12.7643 47.2357C16.1732 50.6446 20.5164 52.9661 25.2447 53.9066C29.973 54.8472 34.874 54.3644 39.3279 52.5196C43.7819 50.6747 47.5887 47.5505 50.2671 43.542C52.9454 39.5336 54.375 34.8209 54.375 30C54.3682 23.5374 51.7979 17.3415 47.2282 12.7718C42.6585 8.20209 36.4626 5.63182 30 5.625ZM40.7016 25.7016L27.5766 38.8266C27.4024 39.0009 27.1956 39.1392 26.968 39.2335C26.7404 39.3279 26.4964 39.3765 26.25 39.3765C26.0036 39.3765 25.7596 39.3279 25.532 39.2335C25.3044 39.1392 25.0976 39.0009 24.9234 38.8266L19.2984 33.2016C18.9466 32.8497 18.749 32.3726 18.749 31.875C18.749 31.3774 18.9466 30.9003 19.2984 30.5484C19.6503 30.1966 20.1275 29.999 20.625 29.999C21.1226 29.999 21.5997 30.1966 21.9516 30.5484L26.25 34.8492L38.0484 23.0484C38.2227 22.8742 38.4295 22.736 38.6571 22.6418C38.8847 22.5475 39.1286 22.499 39.375 22.499C39.6214 22.499 39.8653 22.5475 40.0929 22.6418C40.3206 22.736 40.5274 22.8742 40.7016 23.0484C40.8758 23.2226 41.014 23.4295 41.1082 23.6571C41.2025 23.8847 41.2511 24.1286 41.2511 24.375C41.2511 24.6214 41.2025 24.8653 41.1082 25.0929C41.014 25.3205 40.8758 25.5274 40.7016 25.7016Z" fill="#1DA7E0" />
        </svg>
    );
};
type Props = {
    benefits: string[];
};

const BenefitsList = ({ benefits = [] }: Props) => {
    const benefitsData = benefits.length > 0 ? benefits : [
        "Vantajoso em relação à área de piso, distância e desnível entre as unidades condensadoras e evaporadoras;",
        "Diversidade nos modelos e capacidades das unidades;",
        "Maior eficiência energética em sistemas de expansão direta;",
        "Grande eletrônica embarcada com automação simples;",
        "Controle individualizado e Autodiagnóstico e relatório de erros."
    ];

    return (
        <div className={style['benefits-container']}>
            <h2 className={style['benefits-title']}>
                <span>+</span> Benefícios do <span>Clube!</span>
            </h2>
            <div className={style['benefits-cards']}>
                {benefitsData.map((benefit, index) => (
                    <div key={index} className={style['benefits-card']}>
                        <SvgListCard />
                        <p className={style['benefits-label']}>{benefit}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


BenefitsList.schema = {
    title: "Lista de Benefícios",
    description: "Componente que exibe uma lista de benefícios com ícones SVG.",
    type: "object",
    properties: {
        benefits: {
            title: "Benefícios",
            type: "array",
            items: {
                type: "string",
                title: "Benefício"
            },
        }
    }
};

export default BenefitsList;
