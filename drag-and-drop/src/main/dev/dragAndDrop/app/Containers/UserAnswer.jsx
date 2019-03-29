import React,{ Component } from 'react';
import DragObjectItem from './../Components/DragObjectItem';

class UserAnswer extends Component {
    constructor(props){
        super(props)
    }

    render () {
        console.log('##### dragItems: ', this.props.dragItems)
        return (
          <React.Fragment>
              {
                  this.props.dragItems.map((item, i) => {
                      return (<DragObjectItem key={`item_${i}`} {...item}/>)
                  })
              }
          </React.Fragment>

        )
    }


}

export default UserAnswer