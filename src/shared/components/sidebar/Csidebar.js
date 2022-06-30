import React from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { Link } from 'react-router-dom'
import { CSidebarNav,CSidebarBrand,CSidebar,CNavTitle,CNavItem,CBadge,CNavGroup,CSidebarToggler } from '@coreui/react'
function Csidebar() {
  return (
    <div>
      <CSidebar className=''>
  <CSidebarBrand className=''>AptCoder</CSidebarBrand>
  <CSidebarNav>
    <CNavTitle>Nav Title</CNavTitle>
    <CNavItem href="#">Reports</CNavItem>
    <CNavGroup toggler="Content">
      <CNavItem href='/courses'>Courses</CNavItem>
      <CNavItem href="#">Packages</CNavItem>
      <CNavItem href="#">Asset Library</CNavItem>
      <CNavItem href="#">Question Bank</CNavItem>
    </CNavGroup>
    <CNavItem href="#">
      Membership
      <CBadge color="primary ms-auto">NEW</CBadge>
    </CNavItem>
    <CNavItem href="#">Users</CNavItem>
    <CNavItem href="#">Engagement</CNavItem>
    <CNavItem href="#">Design</CNavItem>
    <CNavItem href="#">Design</CNavItem>
    <CNavItem href="#">Design</CNavItem>
    <CNavItem href="#">Marketing</CNavItem>
    <CNavItem href="#">Integration</CNavItem>
    <CNavItem href="#">Integration</CNavItem>
    <CNavItem href="#">Integration</CNavItem>
    <CNavItem href="#">Settings</CNavItem>
  </CSidebarNav>
  <CSidebarToggler />
</CSidebar>
    </div>
  )
}

export default Csidebar
