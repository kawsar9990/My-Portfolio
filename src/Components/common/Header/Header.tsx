'use client'

import Dekstop from "./DekstopHeader"
import ResponsiveHeader from "./ResponsiveHeader"

export default function Header(){
return(
<div className="">

<div className="hidden lg:hidden xl:block">
    <Dekstop />
</div>

<div className="xl:hidden block">
    <ResponsiveHeader />
</div>

</div>
)
}