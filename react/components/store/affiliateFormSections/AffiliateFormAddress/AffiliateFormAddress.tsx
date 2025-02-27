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

function AffiliateFormAddress(props: Props) {
  const { values, handleChange, handleBlur } = props
  const intl = useIntl()

  return (
    <div className={style["affiliate-form__container--section"]}>
      <div className={style['affiliate-form__wrapper']}>
        <div className={style["affiliate-form__col"]}>
          <div>
            <label htmlFor={intl.formatMessage(storeMessages.affiliateCEPLabel)}>
              Cep:<span>*</span>
            </label>
            <input
              name="address.postalCode"
              placeholder={intl.formatMessage(storeMessages.affiliateNoSpecial)}
              pattern="\d*"
              value={values.address.postalCode}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label htmlFor={intl.formatMessage(storeMessages.affiliateNumberLabel)}>
              Número:<span>*</span>
            </label>
            <input
              name="address.number"
              placeholder={intl.formatMessage(storeMessages.affiliateNumberLabel)}
              value={values.address.number}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label htmlFor={intl.formatMessage(storeMessages.affiliateReferenceLabel)}>
              Ponto de Referência:<span>*</span>
            </label>
            <input
              name="address.reference"
              placeholder={intl.formatMessage(
                storeMessages.affiliateReferenceLabel
              )}
              value={values.address.reference}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label htmlFor={intl.formatMessage(storeMessages.affiliateStateLabel)}>
              Estado:<span>*</span>
            </label>
            <input
              name="address.state"
              placeholder={intl.formatMessage(storeMessages.affiliateStateLabel)}
              value={values.address.state}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className={style["affiliate-form__col"]}>
          <div>
            <label htmlFor={intl.formatMessage(storeMessages.affiliateStreetLabel)}>
              Rua:<span>*</span>
            </label>
            <input
              name="address.street"
              placeholder={intl.formatMessage(storeMessages.affiliateStreetLabel)}
              value={values.address.street}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label htmlFor={intl.formatMessage(storeMessages.affiliateDistrictLabel)}>
              Bairro:<span>*</span>
            </label>
            <input
              name="address.neighborhood"
              placeholder={intl.formatMessage(
                storeMessages.affiliateDistrictLabel
              )}
              value={values.address.neighborhood}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label htmlFor={intl.formatMessage(storeMessages.affiliateCityLabel)}>
              Cidade:<span>*</span>
            </label>
            <input
              name="address.city"
              placeholder={intl.formatMessage(storeMessages.affiliateCityLabel)}
              value={values.address.city}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label htmlFor={intl.formatMessage(storeMessages.affiliateCountryLabel)}>
              País:<span>*</span>
            </label>
            <input
              name="address.country"
              placeholder={intl.formatMessage(
                storeMessages.affiliateCountryLabel
              )}
              value={values.address.country}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AffiliateFormAddress
