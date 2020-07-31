import React from 'react';
class ButtonComponent extends React.Component{

    render(){
        return (
                <button style={this.props.buttonStyle} onClick={this.props.handleAdd}>{this.props.BtnText}</button>
               );
    }
}
export default ButtonComponent;