import React, { PureComponent } from 'react';
import Target from './../Components/Target'

class Targets extends PureComponent {

    render () {
        console.log('targets: ', this.props.targets)
        return (
          <React.Fragment>
              {
                  this.props.targets.map((item, i) => {
                      return (<Target key={`item_${i}`} item={item}/>)
                  })
              }
          </React.Fragment>

        )
    }
}

export default Targets