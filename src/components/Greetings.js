import React, {Component} from 'react'

class Greetings extends Component {

    render(){
    const {lang} = this.props;
    let text = ''
    if (lang === 'en'){
        text = 'Hello'
    }
    else if(lang === 'de'){
        text = 'Hallo'
    }
    else if(lang === 'fr'){
        text = "Bonjour"
    }
    else if (lang ==='es'){
        text = 'Hola'
    }

    return(
        <div>
            {text} {this.props.children}
        </div>
    )
}
}


export default Greetings;