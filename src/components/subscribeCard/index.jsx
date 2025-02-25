import './index.scss';

const SubscribeCard = () => {
    return (
        <div className="subscribe_card">
            <div className="subscribe_card__wrapper">
                <h3>
                    Looking to get notified when I post a new article?
                </h3>
                <div className="subscribe_card__form">
                    <input type="email" placeholder="janedawson@mail.com" />
                    <button>
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SubscribeCard;