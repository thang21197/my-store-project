import React, { Component } from 'react';
import { Link,useRouteMatch} from "react-router-dom";

class Sidebar extends Component {
    render() {
        return (
        <div id="sidebar-collapse" className="col-sm-3 col-lg-2 sidebar">
            <form role="search">
            </form>
            <ul className="nav menu">
              <MenuLink activeOnlyWhenExact={true}  to="/"  label="Tổng quan" icon={<svg className="glyph stroked dashboard-dial"><use xlinkHref="#stroked-dashboard-dial" /></svg> }  />
              <MenuLink activeOnlyWhenExact={true}  to="/category"  label="Danh Mục" icon={<svg className="glyph stroked clipboard with paper"><use xlinkHref="#stroked-clipboard-with-paper" /></svg>}  />
              <MenuLink activeOnlyWhenExact={true}  to="/product"  label=" Sản phẩm" icon={<svg className="glyph stroked bag"><use xlinkHref="#stroked-bag" /></svg> }  />
              <MenuLink activeOnlyWhenExact={true}  to="/order"  label=" Đơn hàng" icon={<svg className="glyph stroked notepad "><use xlinkHref="#stroked-notepad" /></svg>  }  />

              <li role="presentation" className="divider" />
              <MenuLink activeOnlyWhenExact={true}  to="/users"  label=" Quản lý thành viên" icon={<svg className="glyph stroked male-user"><use xlinkHref="#stroked-male-user" /></svg> }  />
            </ul>
          </div>
        );
    }
}
function MenuLink({ label, to, activeOnlyWhenExact,icon }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });
  return (
    <li className={match ? "active" : ""}>
      
      <Link to={to}> {icon}{label}</Link>
    </li>
  );
}

export default Sidebar;