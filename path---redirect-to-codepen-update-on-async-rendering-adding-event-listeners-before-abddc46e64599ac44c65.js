webpackJsonp([0x5dc3e9d603be],{945:function(n,e){n.exports={pathContext:{action:"https://codepen.io/pen/define",payload:'{"editors":"0010","html":"<div id=\\"root\\"></div>","js":"// Before\\nclass ExampleComponent extends React.Component {\\n  // highlight-range{1-10}\\n  componentWillMount() {\\n    this.setState({\\n      subscribedValue: this.props.dataSource.value,\\n    });\\n\\n    // This is not safe; it can leak!\\n    this.props.dataSource.subscribe(\\n      this.handleSubscriptionChange\\n    );\\n  }\\n\\n  componentWillUnmount() {\\n    this.props.dataSource.unsubscribe(\\n      this.handleSubscriptionChange\\n    );\\n  }\\n\\n  handleSubscriptionChange = dataSource => {\\n    this.setState({\\n      subscribedValue: dataSource.value,\\n    });\\n  };\\n}\\n","js_external":"//unpkg.com/react/umd/react.development.js;//unpkg.com/react-dom/umd/react-dom.development.js","js_pre_processor":"babel","layout":"left"}'}}}});
//# sourceMappingURL=path---redirect-to-codepen-update-on-async-rendering-adding-event-listeners-before-abddc46e64599ac44c65.js.map