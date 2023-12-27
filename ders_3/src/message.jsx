

const Message = function(props){
    const {name,age}=props;
    return (
        <div>
            <h2> merhaba {name} {age} yaşında!</h2>
        </div>
    );
}

export default Message;