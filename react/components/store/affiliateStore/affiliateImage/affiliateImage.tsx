import React from 'react'

type Props = {
    ImageMobile: string;
    ImageDesktop: string;
    Alt: string;
}

const affiliateImage = ({ ImageMobile, ImageDesktop, Alt }: Props) => {
    const isMobile = window.innerWidth < 728
    return (
        <>
            {isMobile ? (
                <img
                    src={ImageMobile ? ImageMobile
                        : "https://friopecas.vtexassets.com/assets/vtex.file-manager-graphql/images/c536b5da-0ec9-4658-82e1-dc79e9cc637a___61e2401470857409a628953358001930.png"}
                    height={180}
                    width="100%"
                    alt={Alt} />

            ) : (
                <img
                    src={ImageDesktop ? ImageDesktop
                        : "https://friopecas.vtexassets.com/assets/vtex.file-manager-graphql/images/15610131-cb5a-41e9-a9e4-136ac2057d8d___eb968f002f03aa7810cee8482f5ca711.png"}
                    height={180}
                    width="100%"
                    alt={Alt} />
            )}

        </>
    )
}
affiliateImage.schema = {
    title: "Clique aqui para alterar o banner ",
    description: "Componente de imagem personalizado",
    type: "object",
    properties: {
        imageMobile: {
            title: "Imagem Mobile",
            type: "string",
            default: "https://friopecas.vtexassets.com/assets/vtex.file-manager-graphql/images/c536b5da-0ec9-4658-82e1-dc79e9cc637a___61e2401470857409a628953358001930.png",
            widget: {
                "ui:widget": "image-uploader"
            }
        },
        ImageDesktop: {
            title: "Imagem Desktop",
            type: "string",
            default: "https://friopecas.vtexassets.com/assets/vtex.file-manager-graphql/images/15610131-cb5a-41e9-a9e4-136ac2057d8d___eb968f002f03aa7810cee8482f5ca711.png",
            widget: {
                "ui:widget": "image-uploader"
            }
        },
        Alt: {
            title: "Texto alternativo da Imagem",
            type: "string"
        },
    }
}
export default affiliateImage