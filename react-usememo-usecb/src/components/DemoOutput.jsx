import React from 'react';

import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
    console.log('DemoOutput RUNNING');
    return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
};

//to ensure this componnet is reevaluated only 
//when the props value changes when compared, use Reactmemo only for F.C
export default React.memo(DemoOutput);