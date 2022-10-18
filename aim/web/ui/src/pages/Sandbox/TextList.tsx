import * as React from 'react';
import * as _ from 'lodash-es';

function TextList(props: any) {
  const data = props.data.map((text: any) => ({
    ...text,
    ...text.data.data,
    ...text.data.texts,
    ...text.data.record,
  }));

  console.log(data);
  return (
    <div
      style={{
        height: '100%',
        overflow: 'auto',
      }}
    >
      {data.map((item: any, i: number) => (
        <div
          key={i}
          style={{
            margin: '5px',
            flex: 1,
          }}
        >
          <pre
            style={{
              padding: '6px 8px',
              backgroundColor: '#e8eaee',
              borderRadius: 4,
              color: item.color,
              whiteSpace: 'normal',
            }}
          >
            {item.data}
          </pre>
        </div>
      ))}
    </div>
  );
}

export default TextList;