import React,{PureComponent}from 'react'
import {HomeWrapper ,HomeLeft, HomeRight,BackTop} from './style'
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import {connect} from 'react-redux';
import { actionCreators} from './store'

class Home extends PureComponent{

    handleScrollTop(){
        window.scroll(0,0);
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className={'banner-img'}
                         alt={''}
                         src='https://upload.jianshu.io/admin_banners/web_images/4601/3f4d6684a208a27d92ea7b5b9759c9dc5049d4c0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {
                    this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>: null
                }

            </HomeWrapper>

        )
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.props.changeScrollTopShow)

    }

    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}

const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home','showScroll'])
});

const mapDispatchToProps = (dispatch) => ({
   changeHomeData(){
        const action = actionCreators.getHomeInfo();
        dispatch(action);
   },
    changeScrollTopShow(){
      if (document.documentElement.scrollTop > 100){
          const action = actionCreators.toggleTopShow(true);
          dispatch(action)
      }else{
          const action = actionCreators.toggleTopShow(false);
          dispatch(action)
      }
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);