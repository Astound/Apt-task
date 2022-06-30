import React from 'react'
import {CForm,CFormLabel,CFormInput,CFormCheck} from '@coreui/react'
function Courseform() {
  return (
    <div className='font-sans'>
      <CForm>
  <div className="mb-3">
    <CFormLabel htmlFor="exampleFormControlInput1">Title</CFormLabel>
    <CFormInput type="email" id="exampleFormControlInput1" placeholder=""/>
  </div>
  <div className="mb-3">
    <CFormLabel htmlFor="exampleFormControlInput1">Tags</CFormLabel>
    <CFormInput type="email" id="exampleFormControlInput1" placeholder=""/>
  </div>
  <div className="mb-3">
    <CFormLabel htmlFor="exampleFormControlInput1">Available from</CFormLabel>
    <CFormInput type="email" id="exampleFormControlInput1" placeholder=""/>
  </div>
  <div className="mb-3">
    <CFormLabel htmlFor="exampleFormControlInput1">Pre class message</CFormLabel>
    <CFormInput type="email" id="exampleFormControlInput1" placeholder=""/>
  </div>
  <div className="mb-3">
    <CFormLabel htmlFor="exampleFormControlInput1">Post class message</CFormLabel>
    <CFormInput type="email" id="exampleFormControlInput1" placeholder=""/>
  </div>
</CForm>
    <div>
        Show recording if available <br/>
        <CFormCheck inline type="radio" name="exampleRadios" id="exampleRadios1" value="option1" label="No " defaultChecked/>
<CFormCheck inline type="radio" name="exampleRadios" id="exampleRadios2" value="option2" label="Yes"/>
    </div>
    <div>
        Choose how your learners will join <br/>
        <CFormCheck inline type="radio" name="exampleRadios" id="exampleRadios1" value="option1" label="Zoom " defaultChecked/>
<CFormCheck inline type="radio" name="exampleRadios" id="exampleRadios2" value="option2" label="Browser"/>
    </div>
    </div>
  )
}

export default Courseform
