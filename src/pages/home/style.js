import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    float: left;
    .banner-img{
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    font-size: 14px;
    margin-left: 18px;
    margin-bottom: 18px;
    padding-right: 10px;
    line-height: 32px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    background: #f7f7f7;
    .Topic-pic{
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom : 1px solid #dcdcdc;
    .pic{
        width: 125px;
        height: 100px;
        display: block;
        float: right;
        border-radius: 10px;
    }
    
`;
export  const  ListInfo = styled.div`
    width: 500px;
    float: left;
    .title{
        font-size: 18px;
        line_height: 27px;
        font-weight: bold;
        color: #333;
    }
    .desc{
        font-size: 13px;
        line_height: 27px;
        color: #999;
    }
`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`;

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
    
`;

export const WritterWrapper = styled.div`
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    line-height: 30px;
    height: 300px;
    width: 278px;
    text-align: center;
`;
export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`;
export const BackTop= styled.div`
    position:fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    border: 1px solid #ccc;
    font-size: 15px;
`;

