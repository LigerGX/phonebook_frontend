const Notification = ({ notification }) => {
  return (
     <div className={notification.error === false ? 'notification' : 'notification error'}>
       <p>{notification.message}</p>
     </div>
   )
}

export default Notification