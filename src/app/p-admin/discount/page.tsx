import Container from '@/components/modules/p-admin/Container'
import PageTitle from '@/components/modules/p-admin/PageTitle'
import CreateDiscount from '@/components/templates/p-admin/CreateDiscount'
import React from 'react'

function page() {
  return (
    <Container>
      <PageTitle content="لیست کد تخفیف" />
      <CreateDiscount/>
    </Container>
  )
}

export default page