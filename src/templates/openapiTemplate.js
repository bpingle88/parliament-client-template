/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { RedocStandalone } from "redoc"

import SiteNav from "../components/SiteNav"
import OpenApiLayout from "../components/openapilayout"
import SEO from "../components/seo"

const OpenApiTemplate = props => {
  return (
    <OpenApiLayout>
      <SEO title={props.pageContext.seo} />
      <div
        css={css`
          display: flex;
          flex-direction: row;
        `}
      >
        <SiteNav currentPage={props.location.pathname} />
        <div
          css={css`
            width: calc(100% - 280px);
          `}
        >
          <RedocStandalone spec={props.pageContext.spec} />
        </div>
      </div>
    </OpenApiLayout>
  )
}

export default OpenApiTemplate