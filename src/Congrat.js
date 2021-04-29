import React from 'react'

export default function congrat(props) {

 if (props.success) {
  return (
   <div data-test="component-congrat">
    <span data-test="message">
     Congras you guessed word!
    </span>

   </div>
  )

 } else {
  return (
   <div data-test="component-congrat">

   </div>
  )
 }
}
