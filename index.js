const Notification = (props) => {
  //  Write your code here.

  const { imgUrl, imgCls, msgCard, text } = props.source;

  return (
    <div className="msg-card" className={msgCard}>
      <img src={imgUrl} className={imgCls} />
      <p>{text}</p>
    </div>
  );
};

const sourcePrimary = {
  imgUrl: "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png",
  imgCls: "msg-img",
  msgCard: "msg-card-primary",
  text: "Information Message",
};

const sourceSuccess = {
  imgUrl: "https://assets.ccbp.in/frontend/react-js/success-icon-img.png",
  imgCls: "msg-img",
  msgCard: "msg-card-success",
  text: "Success Message",
};

const sourceWarning = {
  imgUrl: "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png",
  imgCls: "msg-img",
  msgCard: "msg-card-warning",
  text: "Warning Message",
};

const sourceDanger = {
  imgUrl: "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png",
  imgCls: "msg-img",
  msgCard: "msg-card-danger",
  text: "Error Message",
};

const element = (
  //  Write your code here.

  <div className="message-bg">
    <h1 className="heading">Notifications </h1>
    <Notification source={sourcePrimary} />
    <Notification source={sourceSuccess} />
    <Notification source={sourceWarning} />
    <Notification source={sourceDanger} />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
