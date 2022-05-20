import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setIsFetching,
} from "../../redux/UsersReducer";
import Preloader from "../Perloader/Preloader";
import Users from "./Users";
import axios from "axios";
import { getUsers } from "../../api/Api";
class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      this.props.setIsFetching(false);
      this.props.setUsers(data);
    });
  }

  changePage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true);
    getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.setIsFetching(false);
      this.props.setUsers(data);
    });
  };
  render() {
    return (
      <div>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          changePage={this.changePage}
          usersData={this.props.usersData}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (usersData) => {
//       dispatch(setUsersAC(usersData));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(setIsFetchingAC(isFetching));
//     },
//   };
// };

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setIsFetching,
})(UsersContainer);
