import Container from '@/components/modules/p-admin/Container'
import PageTitle from '@/components/modules/p-admin/PageTitle'
import CreateDiscount from '@/components/templates/p-admin/CreateDiscount'
import DiscountList from '@/components/templates/p-admin/DiscountList'
import React from 'react'

function page() {
  return (
    <Container>
      <PageTitle content="ایجاد کد تخفیف" />
      <CreateDiscount/>
      <PageTitle content="لیست کد تخفیف" />
      <DiscountList/>
    </Container>
  )
}

export default page