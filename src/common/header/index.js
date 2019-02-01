import React, {Component} from 'react';
import {HeaderWrapper , Logo , SearchInfo, SearchInfoList,SearchInfoItem,SearchInfoTitle,SearchInfoSwich, Nav,NavItem,NavSeach , Addition , Button,SeearchWrapper} from "./style";
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import {actionCreators} from './store';
import {actionCreators as loginActionCreators} from '../../pages/login/store';
import {Link} from 'react-router-dom';

class Header extends Component{

    getListArea = () => {
        const {focused,list,page,mouseIn,totalPage,handlePageChange,handleMouseEnter,handleMouseLeave} = this.props;
        const newList = list.toJS();
        const pageList=[];

        if (newList.length){
            for (let i =(page-1) * 10; i< page * 10; i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }


        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwich
                            onClick={()=> handlePageChange(page,totalPage,this.spinIcon)}
                        >
                            <span ref={(icon)=>{this.spinIcon = icon}} className={'iconfont spin'}>&#xe698;</span>
                            换一批
                        </SearchInfoSwich>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )

        } else {
            return null;
        }
    };
    render() {
        const {focused,handleInputFocus,handleInputBlur,list,login,loginOut} = this.props;
        return (
            <HeaderWrapper>
                <Link to={'/'}>
                    <Logo />
                </Link>

                <Nav>
                    <NavItem className={'left active'}>首页</NavItem>
                    <NavItem className={'left'}>下载App</NavItem>
                    {
                        login ?
                            <Link to={'/'}>
                            <NavItem onClick={loginOut} className={'right'}>退出</NavItem>
                            </Link> :
                                <Link to={'/login'}>
                                    <NavItem className={'right'}>登陆</NavItem>
                                </Link>
                    }

                    <NavItem className={'right'}>
                        <span className="iconfont">&#xe601;</span>
                    </NavItem>
                    <SeearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSeach
                                className={focused ? 'focused': ''}
                                onFocus={()=>handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            >

                            </NavSeach>
                        </CSSTransition>
                        <span className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>
                            &#xe600;
                        </span>
                        {this.getListArea()}
                    </SeearchWrapper>
                </Nav>
                <Addition>
                    <Link to={'/write'}>
                        <Button className={'writting'}>
                            <span className="iconfont">&#xe616;</span>
                            写文章
                        </Button>
                    </Link>
                    <Button className={'reg'}>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header','focused']),
        list: state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        mouseIn: state.getIn(['header','mouseIn']),
        totalPage: state.getIn(['header','totalPage']),
        login: state.getIn(['login','login'])
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list){
            if (list.size === 0){
                dispatch(actionCreators.getList());
            }

            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handlePageChange(page,totalPage,spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if (originAngle){
                originAngle = parseInt(originAngle,10);
            } else {
                originAngle = 0;
            }
            spin.style.transform='rotate('+(originAngle + 360)+ 'deg)';

            if (page < totalPage){
                dispatch(actionCreators.pageChange(page+1));
            }else {
                dispatch(actionCreators.pageChange(1));
            }

        },
        loginOut(){
            dispatch(loginActionCreators.loginOut())
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);

