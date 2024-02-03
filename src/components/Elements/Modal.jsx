import React from "react";
import { Icon } from "@chakra-ui/react";
import { FcApproval } from "react-icons/fc";

import iconfail from "../../assets/img/close.png";

export default function Modal({ message, oprtion,clickIn,setVerfy }) {
  const view_modal = () => {
    // var exModals = document.getElementById('exModals');
    // exModal.addEventListener('click', function(event) {
    //     exModals.style.display = "block";
    //     exModals.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    // })
  };
  return (
    <div>
      <h5 style={{ fontSize: "20px" }}>hll324234324ow</h5>

      <section
        onClick={()=>{setVerfy(false)}}
        className="topics-section "
        style={{
          // display: "none",
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          background: "transparent",
          backgroundColor: "#00000099",
          zIndex: 999,
        }}
        id="exampleModalsfg"
      >
        <div
          className="modal-dialog"
          style={{
            // border:'solid 2px #000',
            width: "70vh",
            // width: "100%",
            // height: "40vh",
            padding: "5%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            backgroundColor: "#fff",
            // alignItems:'center',
            alignSelf: "center",
          }}
        >
          <a
            onClick={clickIn()}
            style={{
              border: "solid 2px #000",
              alignSelf: "flex-end",
              width:'3vh',
              height:'3vh'
            }}
            // type="a"
            // className="btn-close"
            // data-bs-dismiss="modal"
            // aria-label="Close"
          >
            اغلاق
          </a>
          <div
            style={{
              // border:'solid 2px',
              textAlign: "center",
              height: "100%",
            }}
            className="modal-content"
          >
            <div className="modal-body">
              <h1 className="modal-title">{message}</h1>
              {/* <h5>{message}</h5> */}
              {oprtion === true ? (
                <Icon
                  margin="0.3em"
                  as={FcApproval}
                  color="#2D3291"
                  fontSize="9em"
                />
              ) : (
                <img style={{ marginTop: "2em" }} src={iconfail} width="40%" />
              )}

              <p id="size"></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
