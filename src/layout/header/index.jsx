import { Component } from "react";
import './index.scss'
class HeaderContent extends Component {
    render(){
        return (
           <div className="header-content-wrapper">
            <a> <img className="img-wrap" src="https://static2.cnodejs.org/public/images/cnodejs_light.svg"/> </a>
             <input type="text" />
             <ul className="catrgory">
                <li className="catrgory-item"><a href="">首页</a></li>
                <li className="catrgory-item"><a className="name" href="">新手入门</a></li>
                <li className="catrgory-item"><a href="">API</a></li>
                <li className="catrgory-item"><a href="">关于</a></li>
                <li className="catrgory-item"><a href="">注册</a></li>
                <li className="catrgory-item"><a href="">登录</a></li>
             </ul>
           </div>
        )
    }
}

export default HeaderContent