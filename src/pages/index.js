import React from "react"
import LayoutWrapper from "../components/Containers/LayoutWrapper/LayoutWrapper"
import './index.css'
import ContentWrapper from "../components/Containers/ContentWrapper/ContentWrapper"

const index = props => {
  return (

    <div>
      <LayoutWrapper >
        <ContentWrapper></ContentWrapper>
      </LayoutWrapper>
    </div>
  )
}

export default index
