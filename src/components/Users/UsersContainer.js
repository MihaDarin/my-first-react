import React from "react";
import { connect } from "react-redux";
import {
  followAC,
  setUsersAC,
  unfollowAC,
  setCurrentPageAC,
  // setTotalUsersCountAC,
} from "../../redux/UsersReducer";

import Users from "./Users";
import axios from "axios";

class UsersContainer extends React.Component {
  componentDidMount() {
    if (this.props.usersData.length === 0) {
      axios
        .get(
          `http://localhost:3001/users?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`
        )
        .then((response) => {
          this.props.setUsers(response.data);
        });
    }
  }

  changePage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `http://localhost:3001/users?_page=${pageNumber}&_limit=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data);
      });
  };
  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        changePage={this.changePage}
        usersData={this.props.usersData}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (usersData) => {
      dispatch(setUsersAC(usersData));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
