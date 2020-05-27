import React, { useEffect } from 'react'

function Page(props) {
  useEffect(() => {
      document.title = `${props.title} | Ohmyfood`
   }, [])
  return <main>{props.children}</main>
  
}

export default Page