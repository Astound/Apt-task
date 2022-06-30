import React from 'react'
import {CCard,CCardImage,CCardBody,CCardText,CCardTitle} from '@coreui/react'
function Cards() {
  return (
    <div>
      <CCard style={{ width: '18rem' }}>
  <CCardImage orientation="top" src="https://www.roboprenr.com/media/images/summer-camp-image.png" />
  <CCardBody>
    <CCardTitle>Test course</CCardTitle>
    <CCardText> Siphall
    </CCardText>
  </CCardBody>
</CCard>
    </div>
  )
}

export default Cards
