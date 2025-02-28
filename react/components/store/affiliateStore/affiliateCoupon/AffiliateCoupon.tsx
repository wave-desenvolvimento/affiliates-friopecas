import React, { useState } from "react";
import style from './style.css';
import { Info, Copy } from '../../Icons'

const CouponCard = ({ discount, code }: { discount: string; code: string }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 4000);
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
    const isMobile = window.innerWidth < 728

    return (
        <div className={style['coupon-container']}>
            {isMobile ? (
                <div className={style['coupon-wrapper-mobile']}>
                    <div className={style['coupon-container-slider']}>

                        {couponInfo.coupons.map((coupon, index) => (
                            <CouponCard key={index} discount={coupon.discount} code={coupon.code} />
                        ))}
                    </div>
                    <div className={style["coupon-info--container"]}>
                        <div className={style["coupon-info"]}>
                            <div>
                                <Info />

                            </div>
                            <div>

                                <p className={style["coupon-info-title"]}>
                                    {couponInfo.title}
                                </p>
                                <p className={style["coupon-info-subtitle"]}>
                                    {couponInfo.description}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            ) : (
                <>
                    {
                        couponInfo.coupons.map((coupon, index) => (
                            <CouponCard key={index} discount={coupon.discount} code={coupon.code} />
                        ))
                    }
                    <div className={style["coupon-info--container"]}>
                        <div className={style["coupon-info"]}>
                            <div>
                                <Info />

                            </div>
                            <div>

                                <p className={style["coupon-info-title"]}>
                                    {couponInfo.title}
                                </p>
                                <p className={style["coupon-info-subtitle"]}>
                                    {couponInfo.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )
            }

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
