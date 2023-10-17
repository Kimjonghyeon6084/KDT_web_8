import { useContext, useEffect, useState } from 'react'
// import './../css/Detail.css'


export default function TabComponent ({tab}) {
  
  // if (props.tab == 0) {
  //   return (<div>1</div>)
  // } else if ( props.tab == 1) {
  //   return (<div>2</div>)
  // } else if ( props.tab == 2) {
  //   return (<div>3</div>)
  // }

  const [fade ,setFade] = useState()

  useEffect(() => {
    const a = setTimeout(() => {setFade('end')}, 100)
    
    return () => {
      clearTimeout(a)
      setFade('')
    }
  }, [tab])

  return (
    <div className={`start ${fade}`}>
    {[<div>0</div>, <div>1</div>, <div>2</div>][tab]}
  </div>
  ) 
}