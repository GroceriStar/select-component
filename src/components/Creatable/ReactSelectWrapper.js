import React, {
   Component, Fragment
 } from 'react';
import CreatableSelect from 'react-select/lib/Creatable';



function toOpt(arr) {
    let Opt= arr.reduce((intermediate, item, index) => {
        intermediate[index]={};
        intermediate[index].value = index;
        intermediate[index].label = item;
        return intermediate;
    }, []);
    return Opt;
}


class ReactSelectWrapper extends Component {

    constructor(props) {
      super(props);
    }

    render() {

      const { options, onChange, value, onBlur} = this.props;
      // isMulty didn't handled well. also for some additional values lets use {...data}
       
      return(
          <Fragment>

              <CreatableSelect
                  multi={false}
                  options={options}
                  onChange={onChange}
                  value={value}
                  showNewOptionAtTop={true}
                  onBlur={onBlur}
              />
          </Fragment>
      );
    }
}

export { ReactSelectWrapper, toOpt };
