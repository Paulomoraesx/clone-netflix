import "./Header.css"

type Props = {
    valor: boolean
}

export default function Header(black: Props) {
    return (
        <header className={black.valor ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                        alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt="User" />
                </a>
            </div>
        </header>
    )
}
