import React from "react";

function ErrorNotice(props) {
  return (
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
      {props.message}
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true" onClick={props.clearError}>
          &times;
        </span>
      </button>
    </div>
  );
}

export default ErrorNotice;
