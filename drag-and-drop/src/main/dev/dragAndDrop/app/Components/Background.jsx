
import React, { Fragment } from 'react'

const Background = (props) => {
    const {width, height, url} = props.background
    console.log('props.background: ', JSON.stringify(props.background))
    return (<Fragment>
      <img width={width} height={height} src={url} alt={'Drag&drop question baskgroung'}/>
  </Fragment>)
}

export default Background