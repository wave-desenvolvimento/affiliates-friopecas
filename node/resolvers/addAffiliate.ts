import type { MutationAddAffiliateArgs } from 'friopecas.affiliates'
import CustomGraphQLError from '@vtex/api/lib/errors/customGraphQLError'

import type { Affiliates } from '../typings/affiliates'
import { findDocumentsByField, isSlugValid } from '../utils/shared'
import type { Error } from './pushErrors'
import { pushErrors } from './pushErrors'

export const addAffiliate = async (
  _: unknown,
  { newAffiliate }: MutationAddAffiliateArgs,
  { clients: { affiliates } }: Context
) => {

  console.log("newAffiliate", newAffiliate)

  const { slug, email } = newAffiliate
  const errors: Error[] = []

  if (!isSlugValid(slug)) {
    console.log("isSlugValid", !isSlugValid(slug))
    pushErrors(
      {
        message: 'Slug is not valid, must be alphanumeric',
        code: 'SlugNotAlphanumeric',
      },
      errors
    )
  }

  console.log("slug", slug);
  const affiliatesInDbBySlug = await findDocumentsByField<Affiliates>(
    affiliates,
    'slug',
    slug
  )
  console.log('affiliatesInDbBySlug', affiliatesInDbBySlug)

  if (affiliatesInDbBySlug?.length > 0) {
    pushErrors(
      {
        message: 'Affiliate url is already in use',
        code: 'URLInUse',
      },
      errors
    )
  }

  const affiliatesInDbByEmail = await findDocumentsByField<Affiliates>(
    affiliates,
    'email',
    email
  )
  console.log('affiliatesInDbByEmail', affiliatesInDbByEmail)

  if (affiliatesInDbByEmail?.length > 0) {
    pushErrors(
      {
        message: 'Affiliate already exists (email is already in use)',
        code: 'AffiliateAlreadyExists',
      },
      errors
    )
  }

  if (errors.length >= 1) {
    throw new CustomGraphQLError('Add Affiliate validation error', errors)
  }

  const mdDocument = {
    ...newAffiliate,
  } as Affiliates

  const response = await affiliates.save(mdDocument)

  console.log('response', response)

  return affiliates.get(response.DocumentId, ['_all'])
}
