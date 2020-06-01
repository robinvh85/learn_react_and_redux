import React from 'react';
import ReactDom from 'react-dom';
import ComponentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Do you want to do this ?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <ComponentDetail
          author="VH"
          timeAgo="Today 5:00PM"
          content="Hello world"
        />
      </ApprovalCard>

      <ApprovalCard>
        <ComponentDetail
          author="Lotus"
          timeAgo="Today 6:00PM"
          content="Nice post!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <ComponentDetail
          author="Tigon"
          timeAgo="Today 7:00PM"
          content="Yes, you're right!"
        />
      </ApprovalCard>
    </div>
  )
};

ReactDom.render(<App/>, document.querySelector('#root'));
