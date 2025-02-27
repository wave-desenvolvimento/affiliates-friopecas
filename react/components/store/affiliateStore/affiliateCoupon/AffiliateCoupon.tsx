import React, { useState } from "react";
import style from './style.css';

const Copy = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <path d="M16.875 3H6.875C6.70924 3 6.55027 3.06585 6.43306 3.18306C6.31585 3.30027 6.25 3.45924 6.25 3.625V6.75H3.125C2.95924 6.75 2.80027 6.81585 2.68306 6.93306C2.56585 7.05027 2.5 7.20924 2.5 7.375V17.375C2.5 17.5408 2.56585 17.6997 2.68306 17.8169C2.80027 17.9342 2.95924 18 3.125 18H13.125C13.2908 18 13.4497 17.9342 13.5669 17.8169C13.6842 17.6997 13.75 17.5408 13.75 17.375V14.25H16.875C17.0408 14.25 17.1997 14.1842 17.3169 14.0669C17.4342 13.9497 17.5 13.7908 17.5 13.625V3.625C17.5 3.45924 17.4342 3.30027 17.3169 3.18306C17.1997 3.06585 17.0408 3 16.875 3ZM12.5 16.75H3.75V8H12.5V16.75ZM16.25 13H13.75V7.375C13.75 7.20924 13.6842 7.05027 13.5669 6.93306C13.4497 6.81585 13.2908 6.75 13.125 6.75H7.5V4.25H16.25V13Z" fill="#1DA7E0" />
    </svg>
);

const Info = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM10 16.875C8.64026 16.875 7.31105 16.4718 6.18046 15.7164C5.04987 14.9609 4.16868 13.8872 3.64833 12.6309C3.12798 11.3747 2.99183 9.99237 3.2571 8.65875C3.52238 7.32513 4.17716 6.10013 5.13864 5.13864C6.10013 4.17716 7.32514 3.52237 8.65876 3.2571C9.99238 2.99183 11.3747 3.12798 12.631 3.64833C13.8872 4.16868 14.9609 5.04987 15.7164 6.18045C16.4718 7.31104 16.875 8.64025 16.875 10C16.8729 11.8227 16.1479 13.5702 14.8591 14.8591C13.5702 16.1479 11.8227 16.8729 10 16.875ZM11.25 13.75C11.25 13.9158 11.1842 14.0747 11.0669 14.1919C10.9497 14.3092 10.7908 14.375 10.625 14.375C10.2935 14.375 9.97554 14.2433 9.74112 14.0089C9.5067 13.7745 9.375 13.4565 9.375 13.125V10C9.20924 10 9.05027 9.93415 8.93306 9.81694C8.81585 9.69973 8.75 9.54076 8.75 9.375C8.75 9.20924 8.81585 9.05027 8.93306 8.93306C9.05027 8.81585 9.20924 8.75 9.375 8.75C9.70652 8.75 10.0245 8.8817 10.2589 9.11612C10.4933 9.35054 10.625 9.66848 10.625 10V13.125C10.7908 13.125 10.9497 13.1908 11.0669 13.3081C11.1842 13.4253 11.25 13.5842 11.25 13.75ZM8.75 6.5625C8.75 6.37708 8.80499 6.19582 8.908 6.04165C9.01101 5.88748 9.15743 5.76732 9.32874 5.69636C9.50004 5.62541 9.68854 5.60684 9.8704 5.64301C10.0523 5.67919 10.2193 5.76848 10.3504 5.89959C10.4815 6.0307 10.5708 6.19775 10.607 6.3796C10.6432 6.56146 10.6246 6.74996 10.5536 6.92127C10.4827 7.09257 10.3625 7.23899 10.2084 7.342C10.0542 7.44502 9.87292 7.5 9.6875 7.5C9.43886 7.5 9.20041 7.40123 9.02459 7.22541C8.84878 7.0496 8.75 6.81114 8.75 6.5625Z" fill="#7B7B7B" />
    </svg>
);

const CouponCard = ({ discount, code }: { discount: string; code: string }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={style['coupon-card__container']}>
            <p className={style['coupon-card__title']}> <span>{discount}</span> OFF</p>
            <p className={style['coupon-card__subtitle']}>USE O CUPOM:</p>
            <button
                onClick={copyToClipboard}
                className={style['coupon-card__copy-btn']}
            >
                {copied ? "COPIADO!" : code}
                <Copy />
            </button>
        </div>
    );
};

const AffiliateCoupon = () => {
    const couponInfo = {
        title: "Regras de Utilização dos Cupons:",
        description: " Os cupons podem ser usados apenas uma vez por CPF, por cliente e por pedido.",
        coupons: [
            { discount: "1%", code: "DESCONTO1" },
            { discount: "2%", code: "DESCONTO2" },
            { discount: "3%", code: "DESCONTO3" },
            { discount: "4%", code: "DESCONTO4" },
            { discount: "5%", code: "DESCONTO5" },
        ]
    };

    return (
        <div className={style['coupon-container']}>
            {couponInfo.coupons.map((coupon, index) => (
                <CouponCard key={index} discount={coupon.discount} code={coupon.code} />
            ))}
            <div>
                <div className={style["coupon-info"]}>
                    <Info />
                    <p className={style["coupon-info-title"]}>
                        {couponInfo.title}
                    </p>
                </div>
                <p className={style["coupon-info-subtitle"]}>
                    {couponInfo.description}
                </p>
            </div>
        </div>
    );
};

AffiliateCoupon.schema = {
    title: "Cupons de Afiliado",
    description: "Gerenciar cupons de afiliados com diferentes códigos de desconto.",
    type: "object",
    properties: {
        coupons: {
            type: "array",
            title: "Cupons",
            items: {
                type: "object",
                properties: {
                    discount: {
                        type: "string"
                    },
                    code: {
                        type: "string"
                    },

                },
            },
        },
    },
};

export default AffiliateCoupon;
