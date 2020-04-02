import React from "react";

const Page = ({ headerProps, footerProps, ...mainProps }) => (
    <Page.Container>
        <Page.Header {...headerProps} />
        <Page.Content {...mainProps} />
        <Page.Footer {...footerProps}/>
    </Page.Container>
)

export default Page;