import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  // using lodash to calculate average
  return _.round(_.sum(data) / data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines height={180} width={200} data={ props.data }>
        <SparklinesLine color={ props.color } />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        { average(props.data) } { props.units }
      </div>
    </div>
  );
}
