import React, { useState, useEffect } from 'react'
import { useLazyQuery } from 'react-apollo'
import { useIntl } from 'react-intl'
// import { Input } from 'vtex.styleguide'
import style from '../styles/style.css'

import GET_AFFILIATE_STORE_NAME_QUERY from '../../../../graphql/getAffiliateStoreName.graphql'
import type { ValueType } from '../../../../AffiliateForm'
import { storeMessages } from '../../../../utils/messages'
import { setFormRegex } from '../../../../utils/shared'

interface Props {
  values: ValueType
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  setValue: (field: string, value: string) => void
}

type GetAffiliateStoreNameQueryResult = {
  getAffiliateStoreName: string
}

function AffiliateFormGeneral(props: Props) {
  const { values, handleChange, handleBlur, setValue } = props
  const intl = useIntl()

  const [newSlug, setNewSlug] = useState('')

  const [validateSlug, { data }] =
    useLazyQuery<GetAffiliateStoreNameQueryResult>(
      GET_AFFILIATE_STORE_NAME_QUERY
    )

  async function handleStoreName(e: React.ChangeEvent<HTMLInputElement>) {
    await handleChange(e)
    const updatedSlug = setFormRegex(e.target.value)

    await validateSlug({ variables: { slug: updatedSlug } })

    setNewSlug(updatedSlug)
  }

  useEffect(() => {
    if (!data) {
      setValue('slug', newSlug)
    } else {
      const randomNumber = Math.floor(Math.random() * 10000)

      setValue('slug', `${newSlug}${randomNumber}`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, newSlug])

  return (
    <div className={style["affiliate-form__container--section"]}>
      <h3>Preencha o formulário e faça parte do Clube</h3>
      <div className={style['affiliate-form__wrapper']}>
        <div className={style["affiliate-form__col"]}>
          <div>
            <label htmlFor={intl.formatMessage(storeMessages.affiliateNameLabel)}>
              Nome Completo ou Razão Social:<span>*</span>
            </label>
            <input
              required
              name="name"
              placeholder={intl.formatMessage(
                storeMessages.affiliateNamePlaceholder
              )}

              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label htmlFor={intl.formatMessage(storeMessages.affiliateEmailLabel)}>
              E-mail:<span>*</span>
            </label>
            <input
              required
              placeholder={intl.formatMessage(storeMessages.affiliateEmailLabel)}
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>

            <label htmlFor={intl.formatMessage(storeMessages.affiliatePhoneLabel)}>
              Telefone:<span>*</span>
            </label>
            <input
              required
              name="phone"
              type="tel"
              pattern="\d*"
              placeholder={intl.formatMessage(storeMessages.affiliateNoSpecial)}
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label htmlFor={intl.formatMessage(storeMessages.affiliateSlugLabel)}>
              Identificador da URL *

            </label>
            <input
              required
              name="slug"
              placeholder={intl.formatMessage(storeMessages.affiliateNoSpecial)}
              value={values.slug}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className={style["affiliate-form__col"]}>
          <div>

            <label htmlFor={intl.formatMessage(storeMessages.affiliateStoreNameLabel)}>
              Nome da loja
            </label>
            <input
              name="storeName"
              placeholder={intl.formatMessage(
                storeMessages.affiliateStoreNameLabel
              )}
              value={values.storeName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleStoreName(e)
              }
              onBlur={handleBlur}
            />
          </div>
          <div>

            <label htmlFor={intl.formatMessage(storeMessages.affiliateDocumentTypeLabel)}>
              tipo de documento
            </label>
            <input
              name="documentType"
              placeholder={intl.formatMessage(
                storeMessages.affiliateDocumentTypeLabel
              )}
              value={values.documentType}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label htmlFor={intl.formatMessage(storeMessages.affiliateDocumentLabel)}>
              CPF/CNPJ:<span>*</span>
            </label>
            <input
              name="document"
              placeholder={intl.formatMessage(storeMessages.affiliateNoSpecial)}
              pattern="\d*"
              value={values.document}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AffiliateFormGeneral
