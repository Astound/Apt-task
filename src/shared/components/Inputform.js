import React from 'react'

import { CInputGroup,CDropdown, CDropdownToggle,CDropdownMenu,CDropdownItem,CDropdownDivider,CFormInput} from '@coreui/react'
function Inputform() {
  return (
    <div>
      <CInputGroup className="mb-3">
  <CDropdown variant="input-group">
    <CDropdownToggle color="secondary" variant="outline">Add Filters</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider/>
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
  <CFormInput aria-label="Text input with dropdown button"/>
</CInputGroup>
    </div>
  )
}

export default Inputform
