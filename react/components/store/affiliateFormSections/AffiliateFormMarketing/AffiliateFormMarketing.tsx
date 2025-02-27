import React from 'react'
import { useIntl } from 'react-intl'
import style from '../styles/style.css'

import type { ValueType } from '../../../../AffiliateForm'
import { storeMessages } from '../../../../utils/messages'

interface Props {
  values: ValueType
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void
}

function AffiliateFormMarketing(props: Props) {
  const { values, handleChange, handleBlur } = props
  const intl = useIntl()

  return (
    <div className={style["affiliate-form__container--section"]}>
      <div className={style['affiliate-form__wrapper']}>
        <div className={style["affiliate-form__col"]}>
          <div>
            <label htmlFor={intl.formatMessage(storeMessages.affiliateInstagramLabel)}>
              Instagram:<span>*</span>
            </label>
            <input
              name="marketing.instagram"
              placeholder={intl.formatMessage(
                storeMessages.affiliateInstagramLabel
              )}
              value={values.marketing.instagram}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label htmlFor={intl.formatMessage(storeMessages.affiliateWhatsappLabel)}>
              WhatsApp:<span>*</span>
            </label>
            <input
              name="marketing.whatsapp"
              placeholder={intl.formatMessage(
                storeMessages.affiliateWhatsappLabel
              )}
              value={values.marketing.whatsapp}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className={style["affiliate-form__col"]}>
          <div>

            <label htmlFor={intl.formatMessage(storeMessages.affiliateFacebookLabel)}>
              Facebook:<span>*</span>
            </label>
            <input
              name="marketing.facebook"
              placeholder={intl.formatMessage(
                storeMessages.affiliateFacebookLabel
              )}
              value={values.marketing.facebook}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label htmlFor={intl.formatMessage(storeMessages.affiliateGTMLabel)}>
              GTM ID:<span>*</span>
            </label>
            <input
              name="marketing.gtmId"
              placeholder={intl.formatMessage(storeMessages.affiliateGTMLabel)}
              value={values.marketing.gtmId}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AffiliateFormMarketing
