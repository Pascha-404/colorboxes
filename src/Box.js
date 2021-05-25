import React, { Component } from 'react'
import './Box.css'

class Box extends Component{
    static defaultProps = {
        colors: ["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","blanchedalmond","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darksalmon","darkseagreen","darkslateblue","darkslategra","darkslategre","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","greenyellow","grey","honeydew","hotpink","indianred","indig","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","limegreen","linen","magenta","maron","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","oldlace","olive","olivedrab","orange","orangere","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen",]
    }

    constructor(props){
        super(props)
        this.clickHandle = this.clickHandle.bind(this)
        this.state = {color: this.props.colors[Math.floor(Math.random() * this.props.colors.length)]}
    }

    changeColor(e){
        const pickedColor = this.props.colors[Math.floor(Math.random() * this.props.colors.length)]
        this.setState(curState => ({color: pickedColor}))
    }

    clickHandle(e){
        this.changeColor()
    }

    render(){
        return(
            <div className="Box" onClick={this.clickHandle} style={{backgroundColor:(this.state.color)}}></div>
        )
    }
}

export default Box;