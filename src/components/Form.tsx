import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Input } from "./Input";
import { Button } from "./Button";

export const Form = () => {
  return (
    <div className="my-7">
      <Input title="Name" type="text" />
      <Input title="Email" type="email" />
      <div className="float-right mt-12 mr-3">
        <Button title="Submit" color="primary" />
        <Button title="Save" color="secendary" />
      </div>
    </div>
  );
};

Form.propTypes = {
  props: PropTypes,
};

// const mapStateToProps = state => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Form);
