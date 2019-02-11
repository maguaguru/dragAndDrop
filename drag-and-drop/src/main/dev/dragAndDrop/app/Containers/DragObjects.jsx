import React, { PureComponent } from 'react';
import DragObject from './../Components/DragObject'

class DragObjects extends PureComponent {

    constructor(props){
        super(props)
        this.handleDrop = this.handleDrop.bind(this)
    }

    handleDrop(id){
        console.log("handleDrop! " + id)
    }

    render () {
        console.log('##### labels: ', this.props.labels)
        return (
          <React.Fragment>
              {
                  this.props.labels.map((item, i) => {
                      return (<DragObject key={`item_${i}`} item={item} handleDrop={(id) => this.handleDrop(id)}/>)
                  })
              }
          </React.Fragment>

        )
    }
}

export default DragObjects