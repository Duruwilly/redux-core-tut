import React from "react";

import { connect } from "react-redux";
const Navbar = ({ amount }) => {
  return (
    <nav>
      <div className="nav-center">
        <h3>ReduxGear</h3>
        <div className="nav-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
          </svg>
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

// connect returns a component itself and why we wrapped the navbar inside the in a set of parentheses is the function looking for the component the connect is connecting to. 
// connect has few argument but the commonly used is mapStateToProps and mapDispatchToProps

// basically, after we must have wrapped our whole application with the provider, we used connect to get access to the state and the mapToStateProps  basically map the state and pass it as props to the component. in this case we only need the amount state.
const mapStateToProps = (state) => {
  return { amount: state.amount };
}
export default connect(mapStateToProps)(Navbar);
