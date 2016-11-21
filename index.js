const HelloWorld = React.createClass({
  render: function() {
    return hi
    // <div class="hello-world">Hello {this.props.message || 'World'}</div>;
  }
})

// const defaultLimit = 100
//
// export default class TextField extends React.Component {
//   render() {
//     return (
//       <input
//         className="field field-light"
//         onChange={this.props.onChange}
//         maxLength={this.props.limit || defaultLimit} />
//     )
//   }
// }

const defaultLimit = 100

export default function TextField(props) {
  return (
    hi
    // <input
    //   className="field field-light"
    //   onChange={this.props.onChange}
    //   limit={this.props.limit || defaultLimit} />
  )
}
