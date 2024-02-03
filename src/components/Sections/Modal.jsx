import React from 'react'
import iconfail from "../../assets/img/close.png";

export default function Modal({massege,setVirfayflay}) {
  return (
    <section
    onClick={()=>{
      setVirfayflay(false)
    }}
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
      zIndex: 9999,
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
      <button
        
        onClick={()=>{
          setVirfayflay(false);
        }}
        style={{
          // border: "solid 2px #000",
          alignSelf: "flex-end",
          width:'5vh',
          height:'4vh'
        }}
        // type="a"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      >
        
      </button>
      <div
        style={{
          // border:'solid 2px',
          textAlign: "center",
          height: "100%",
        }}
        className="modal-content"
      >
        <div className="modal-body">
          <h1 className="modal-title">{massege}</h1>
          {/* <h5>{message}</h5> */}
            <img style={{ marginTop: "2em" }} src={iconfail} width="40%" />
      

          <p id="size"></p>
        </div>
      </div>
    </div>
  </section>
  )
}
