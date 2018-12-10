import React from 'react';

class Article extends React.Component {
    state  = {
        visible: false, //определили начальное состояние
    }
    handlOpenClick = (i) =>{
        i.preventDefault()
        this.setState({visible: true})
    }
    handlCloseClick = (i) =>{
        i.preventDefault()
        this.setState({visible: false})
    }
    render(){
        const { author, text, bigText } = this.props.data;
        return(
            <div className='article'>
                <p className='news_author'>{author}</p>
                <p className='news_text'>{text}</p>
                {
                    !this.state.visible &&  <a onClick={this.handlOpenClick} href='#' className='news_readmore'>Подробнее</a>
                }
                {
                    this.state.visible && <div  className='news_big-text'> {bigText}<p onClick={this.handlCloseClick} href='#' >свернуть</p></div>
                }
            </div>
        )
    }
}
export default Article;